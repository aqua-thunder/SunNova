// const mongoose = require('mongoose')
// const URI = process.env.MONGODB_URI;

// const connectDb = async () => {
//     try {
//         await mongoose.connect(URI)
//         console.log("connection successfull to databse")
//     } catch (error) {
//         console.error(error)
//         process.exit(0);
//     }
// }

// module.exports = connectDb


const mongoose = require("mongoose");

let isConnected = false;

const connectDb = async () => {
  if (isConnected) {
    console.log("✅ MongoDB already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    throw error; // DO NOT process.exit()
  }
};

module.exports = connectDb;
