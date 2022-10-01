module.exports = (validator) => {
        //this middleware function to check if the request inputs is valid according to a specific function 

    return (req, res, next) => {
        const { error } = validator(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        next();
    }
}