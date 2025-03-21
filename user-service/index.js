const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors");
const userRoutes = require("./routes/user")

const PORT = process.env.PORT || 5000

dotenv.config()
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("PORT:", process.env.PORT);
const app = express()

// middleware
app.use(express.json())

// routes
app.use("/api/users", userRoutes)

console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ User Service is Connected to MongoDB")
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error("🚫 Failed to connect to Database -> User Service", err)
  })
