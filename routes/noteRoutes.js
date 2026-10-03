const express = require("express");

const Note = require("../models/Note");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE NOTE
router.post("/", authMiddleware, async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                message: "Title and content are required"
            });
        }

        const note = await Note.create({
            title,
            content,
            user: req.user.userId
        });

        res.status(201).json({
            message: "Note created successfully",
            note
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create note",
            error: error.message
        });
    }
});

// GET ALL NOTES
router.get("/", authMiddleware, async (req, res) => {
    try {
        const notes = await Note.find({
            user: req.user.userId
        }).sort({ createdAt: -1 });

        res.json(notes);

    } catch (error) {
        res.status(500).json({
            message: "Failed to get notes",
            error: error.message
        });
    }
});

// GET ONE NOTE
router.get("/:id", authMiddleware, async (req, res) => {
    try {
        const note = await Note.findOne({
            _id: req.params.id,
            user: req.user.userId
        });

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.json(note);

    } catch (error) {
        res.status(500).json({
            message: "Failed to get note",
            error: error.message
        });
    }
});

// UPDATE NOTE
router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const { title, content } = req.body;

        const note = await Note.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user.userId
            },
            {
                title,
                content
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.json({
            message: "Note updated successfully",
            note
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update note",
            error: error.message
        });
    }
});

// DELETE NOTE
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({
            _id: req.params.id,
            user: req.user.userId
        });

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.json({
            message: "Note deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete note",
            error: error.message
        });
    }
});

module.exports = router;