const mongoose=require("mongoose");
const expenseSchema=new mongoose.Schema({//mongoose.Schema us used to to create the SCHEMA.
    amount:{
        type:Number,//type means data type
        required:true//means this field is mandatory
    },
    category:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:["income","expense"],//means value must of one of these two
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    note:{
        type:String
    }
});
module.exports=mongoose.model("Expense",expenseSchema);//mogoose.model creates a MongoDb model here Expense is the name of the model and expenseSchema is the schema we created above.
