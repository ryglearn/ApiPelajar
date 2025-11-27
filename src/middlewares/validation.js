const checkValid = (body, fields)=>{
    for(let field of fields ){
        if(body[field] === undefined)
            return field;
    }
    return null;
}

const createPelajar = (req, res, next)=>{
    const missing = checkValid(req.body, ['nama', 'alamat']);

    if(missing){
        return res.status(400).json({
            message: `the column ${missing} is required`
        });
    }
    next();
};

const updatePelajar = (req,res,next)=>{
    if(Object.keys(req.body).length === 0){
        return res.status(400)({
            message: `at least one column mus be provided`
        });
    }
    next();
};

module.exports = {
    createPelajar,
    updatePelajar
}