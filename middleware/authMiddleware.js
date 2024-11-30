// module.exports = authMiddleware;
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1]; // Extract token from 'Authorization' header

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id); // Attach user to request object
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;

