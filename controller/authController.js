import User from "../model/userModel.js";
import generateToken from "../utils/genToken.js";

const getAllUsers = async (req, res) => {
  const user = await User.find().select("-password");
  if (!user) {
    return res.status(404).json({ message: "no user" });
  }

  res.status(200).json({ user });
};

const signUp = async (req, res) => {
  const existing = await User.findOne({ email: req.body.email });

  if (existing) {
    return res.status(403).json({ message: "email taken" });
  }

  const user = await User.create(req.body);

  if (!user) {
    return res.status(400).json({ message: "user not created" });
  }

  res.status(201).json({ message: "signup successfully please login" });
};

const signIn = async (req, res) => {
  // steps
  //   1 check user in the base of the email exist or nore

  const { email, password } = req.body;

  //2 check user found and password are matched
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    //GENRATE TOKEN AND
    const token = generateToken(user._id);
    res.cookie("t", token, { expire: new Date() + 9999 });

    //send the response to the server
    const { _id, name, email } = user;

    res.status(200).json({ token, user_d: { _id, name, email } });
  } else {
    res.status(401).json({ message: "email or password incorrect" });
  }
};

const signOut = (req, res) => {
  res.cookieClear("t");
  return res.json({ message: "successfully signout" });
};

export { signUp, getAllUsers, signIn };
