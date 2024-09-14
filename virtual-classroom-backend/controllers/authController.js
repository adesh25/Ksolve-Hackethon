const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).send('User already registered.');

    user = new User({ name, email, password: await bcrypt.hash(password, 10), role });
    await user.save();

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.header('x-auth-token', token).send({ _id: user._id, name: user.name, role: user.role });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('Invalid email or password.');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password.');

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.header('x-auth-token', token).send(token);
};
