const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const app=express()
app.use(express.json())
app.use(cors())
PORT=6065


mongoose.connect("mongodb+srv://gultekin:gultekinn@cluster0.ez8varc.mongodb.net/").then((res)=>{
    console.log("connected")
})

const userSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    desc: {
        type: String,
        required: [true, "desc is requied"]
    }
    
})

const userModel=mongoose.model("users",userSchema)
//get
app.get("/",async(req,res)=>{
    const data=await userModel.find()
    res.send(data)
})

//post
app.post("/",async(req,res)=>{
    const newModel=await new userModel({
        ...req.body
    })
    newModel.save()
    res.send(newModel)
})
//delete
app.delete("/:id",async(req,res)=>{
    const {id}=req.params
    const newModel=await userModel.findByIdAndDelete(id)
    res.send("delete")
})

//get by id
app.get("/:id",(req,res)=>{
    const {id}=req.params
    const target= userModel.findById(id)
    t
    res.send(target)
})
app.listen(PORT,(req,res)=>{
    console.log("app listenn");
})
