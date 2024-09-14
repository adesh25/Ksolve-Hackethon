const Class = require('../models/Class');

// Create a Class
exports.createClass = async (req, res) => {
    const { title, units } = req.body;
    const userId = req.user._id; // Assuming user is attached to req in authMiddleware

    try {
        // Create a new class
        const newClass = new Class({
            title,
            units,
            enrolledStudents: [userId] // Add the creator as an enrolled student
        });

        // Save the class to the database
        const savedClass = await newClass.save();

        res.json(savedClass);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get All Classes
exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find().populate('units'); // Populating units
        res.json(classes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get Class by ID
exports.getClassDetail = async (req, res) => {
    try {
        const classDetail = await Class.findById(req.params.classId)
            .populate({
                path: 'units',
                populate: {
                    path: 'sessions' // If units have sessions
                }
            })
            .populate('enrolledStudents', 'name email'); // Populate enrolled students with basic info

        if (!classDetail) {
            return res.status(404).json({ msg: 'Class not found' });
        }

        res.json(classDetail);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
