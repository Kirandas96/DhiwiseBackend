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
            data:{$push:{value:"$value",id:"$_id",level:"$level"}}
            }
          },
        {$sort:{_id:1}}])
        let obj={}
        return res.status(200).send(allData)
    } catch (error) {
        res.status(500).send(error)
    }
    
})

module.exports=TableRouter