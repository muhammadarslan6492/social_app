const  createPostValidator = (req, res, next) => {

    //title
    req.check("title", "wite a title").notEmpty();
    req.check("title", "title must be between 4 to 150 characters").isLength({
    min: 4,
    max: 150

});
    //body
    req.check("body", "wite a body").notEmpty();
    req.check("body", "body must be between 4 to 2000 characters").isLength({
    min: 4,
    max: 2000

});

    // check for error 
    const errors =  req.validationErrors();
    if(errors){

        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error: firstError})
    }
    // proceed to the next middleware
    next();

}

const userPostValidator = (req, res, next) => {

    //name is not null 4 to 32 min and max character

    req.check("name", "name is required").notEmpty();

    // email is not null valid and normalized

    req.check("email", "email must be 3 to 40 character").matches(/.+\@.+\..+/)
    .withMessage("email must contain @").isLength({
        min: 4,
        max: 100
    })

    req.check("password", "password not empty").notEmpty();
    req.check("password").isLength({min: 6}).withMessage("password must contain alteast 6 character");

        // check for error 
        const errors =  req.validationErrors();
        if(errors){
    
            const firstError = errors.map(error => error.msg)[0];
            return res.status(400).json({error: firstError})
        }
        // proceed to the next middleware

    next();
}






export {createPostValidator, userPostValidator }