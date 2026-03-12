const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");//it helps REACT to call API.

const expenseRoutes = require("./routes/expenseRoutes");








const app=express();
app.use(cors());
app.use(express.json());

app.use("/api", expenseRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/finance-tracker")
.then((()=>{
    console.log("MongoDb Connected");
}))
.catch((err)=>{
    console.log(err);
});
app.get("/",(req,res)=>{
    res.send("Finance Tracker API Running");
});
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});
