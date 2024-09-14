const Class = require('../models/Class');

exports.createClass = async (req, res) => {
    const newClass = new Class(req.body);
    await newClass.save();
    res.status(201).send(newClass);
};
