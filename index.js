const express=require("express")
const connection = require("./db")
const TableRouter=require("./Route/TableRoute")
require("dotenv").config();

const app=express()
const port=process.env.PORT || 5000 
app.use(express.urlencoded({extended:true}))
app.use(express.json())




app.get("/",(req,res)=>{
    res.status(200).send("Hiiiii")
})


app.use("/table",TableRouter)

app.listen(port,async()=>{
    try {
        await connection
        console.log(`server started ${port}`)
    } catch (er) {
       console.log(er) 
    }
})