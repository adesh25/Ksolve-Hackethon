const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // This attaches the user data to the request
        next();
    } catch (err) {
        res.status(400).send('Invalid token.');
    }
};

module.exports = authMiddleware;
