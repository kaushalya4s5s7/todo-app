const express = require("express");
const app = express();
const {taskSchema} = require("./type.js");
const {localSchema} = require("./type.js");
const { todo } = require("./db");
const cors = require('cors')

app.use(cors());
app.use(express.json());


app.get('/todos',async (req, res) => {
    const todos = await todo.find({});
    res.json({todos});
});

// POST request to add a new todo
app.post('/todos', async(req, res) => {
    const result = req.body;
    const response = taskSchema.safeParse(result);
    if(!response.success){
        res.status(400).json({error: "Invalid request"});
        return;
       }
    await todo.create({
        title : result.title,
        description : result.description,
        completed : false
    })
    res.json({message: "Todo added successfully"});
})


app.put('/completed', async(req, res) => {
   const result = req.body;
   const response = localSchema.safeParse(result);
   if(!response.success){
    res.status(400).json({error: "Invalid request"});
   
   return;
   }

   await todo.updateOne({
    _id: req.body.id
   }, {completed : true})

   res.json({
    msg:"todo marked as completed"
   })
});

// Start the server
app.listen(3000);
