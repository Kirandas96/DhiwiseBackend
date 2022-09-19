const mongoose=require("mongoose")

const tableSchema=mongoose.Schema({
    value:String,
    level:Number
   },
    )

const tableModel=mongoose.model("Table",tableSchema)
module.exports=tableModel