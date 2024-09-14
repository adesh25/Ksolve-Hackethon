const Class = require('../models/Class');

// Create a Class
exports.createClass = async (req, res) => {
    const { title, units } = req.body;
    const userId = req.user.id; // Assuming user is attached to req in authMiddleware

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
