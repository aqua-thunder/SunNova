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


import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

export default connectDb;
