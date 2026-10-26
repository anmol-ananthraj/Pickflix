require("dotenv").config()

const express = require("express")
const cors = require("cors")
const movieRoutes = require("./routes/movieRoutes")
const connectDB = require("./config/db")
const omdbRoutes = require("./routes/omdbRoutes");
const tmdbRoutes = require("./routes/tmdbRoutes");
const rateLimit = require("express-rate-limit");

const app = express()
app.use(cors())
app.use(express.json())

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 500, // Maximum 500 requests per IP per window
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    message: "Too many requests. Please try again in 15 minutes.",
  },
});

app.use("/api", apiLimiter);
app.use("/api/movies", movieRoutes)
app.use("/api/omdb", omdbRoutes);
app.use("/api/tmdb", tmdbRoutes);

app.get("/", (req, res) => {
    res.send("Movie Recommendation Backend is running")
})

const PORT = process.env.PORT || 5000

const startServer = async () => {
  try {
    await connectDB()

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.error("Failed to start server:", error.message)
    process.exit(1)
  }
}

startServer()