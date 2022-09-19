const {Router}=require("express")
const tableModel = require("../Model/Table")

const TableRouter=Router()

TableRouter.post("/",async(req,res)=>{
    const table=new tableModel(req.body)
    
    try {
        const tableData=await table.save()
        res.status(200).send(tableData)
    } catch (error) {
       res.status(500).send(error) 
    }
    
})
TableRouter.get("/",async(req,res)=>{
    try {
        const allData=await tableModel.aggregate([{
            $group:{
            _id:"$level",
            data:{$push:"$value"}
            }
        }])
        let obj={}
        return res.status(200).send(allData)
    } catch (error) {
        res.status(500).send(error)
    }
    
})
// TableRouter.patch("/",async(req,res)=>{
//     const table=new chatModel(req.body)
    
//     try {
//         const savedMsg=await messages.save()
//         res.status(200).json(savedMsg)
//     } catch (error) {
//        res.status(500).json(error) 
//     }
    
// })

module.exports=TableRouter