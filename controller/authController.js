import User from "../model/userModel.js"

const signUp = async(req, res) => {

    const existing = await User.findOne({email: req.body.email});

    if(existing){
        return res.status(403).json({message: "email taken"});
    }

    const user = await User.create(req.body);

    if(!user){
        return res.status(400).json({message: "user not created"});

    }

    res.status(201).json({message: "signup successfully please login"});

}

export {signUp}