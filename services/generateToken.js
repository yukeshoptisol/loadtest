const jwt = require("jsonwebtoken");

const generateToken = (value) => {
    try {
        let data = Object.assign({}, value, { "isRefresh": 0 });
        let accessExpiry = '1d';
        let accessKey = '165ABD3D6727E';
        return jwt.sign({ data }, accessKey, { expiresIn: accessExpiry });

    } catch (err) {
        console.log(err, err?._message);
    }
};

//generateToken({appId: '', userId: 'sdasdsad'})
module.exports = generateToken