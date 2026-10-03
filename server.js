const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// HOME
app.get("/", (req, res) => {
    res.json({
        message: "Notes and To-Do API Backend is running"
    });
});

// AUTHENTICATION
app.use("/api/auth", authRoutes);

// NOTES
app.use("/api/notes", noteRoutes);

// TO-DO TASKS
app.use("/api/tasks", taskRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:");
        console.error(error);
    });