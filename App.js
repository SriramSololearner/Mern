const express =require("express");
const mongoose=require("mongoose");
const cors =require("cors");
const PORT=8080;
const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Users",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected to db..");
}).catch((er)=>{
    console.log(er);
});

const Usersch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "email":String,
    "password":String,
    "Phone":String
});

const Usrmodel=mongoose.model("user",Usersch);

app.get("/",(req,res)=>{
    res.send("server started...");
});

app.get("/getData",async(req,res)=>{
    const data=await Usrmodel.find();
    console.log('gtData')
    res.json(data);

});

app.post("/addData",(req,res)=>{
    console.log(' add    Data')
    const usr=new Usrmodel(req.body);
    usr.save()
    .then(()=>{
        
        res.end("data saved..")
       
    }).catch((er)=>{
        // res.json(er);
        console.log('error',er)
        res.end(er)
    })
})

app.get("/SearchId/:id",(req,res)=>{
    Usrmodel.findById({"_id":req.params.id}).then((data)=>{
        res.json(data);
    }).catch((er)=>{
        res.end(er);
    })
});

app.delete("/del/:id",(req,res)=>{

    Usrmodel.findByIdAndDelete({"_id":req.params.id}).then((data)=>{
        res.end("data deleted");
        console.log(req.params)
    }).catch((er)=>{
        res.end(er);
    })

});

app.put("/update",(req,res)=>{
    Usrmodel.findByIdAndUpdate({"_id":req.body._id},req.body).then((data)=>{
        res.end("data updated successfully");
    }).catch((er)=>{
        console.log(er);
    })
})


app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})