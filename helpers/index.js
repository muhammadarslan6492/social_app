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

export {createPostValidator}