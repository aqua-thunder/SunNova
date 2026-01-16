require('dotenv').config(); 
const express = require('express')
const cors = require('cors')
const app = express();
const connectDb = require("./utils/db.js")
const authRoute = require('./router/auth-router.js');
const adminRoute = require("./router/admin-router.js")
const serviceRoute = require("./router/service-router.js")

const corsOptions = {
    origin: "https://sun-nova-asn1.vercel.app",
    methods: "GET, POST , PUT , DELETE, PATCH, HEAD",
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/admin", adminRoute)
app.use("/api/data", serviceRoute)

app.get("/api/test", (req, res) => {
  res.status(200).json({
    message: "✅ Backend is live and working on Vercel!"
  });
});


// change
connectDb();
// Change

// const PORT = 8000;
// connectOnce();
// .then(()=>{
//     app.listen(PORT, ()=>{
//         console.log(`server run at port ${PORT}`)
//     })
// })