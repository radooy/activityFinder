const express = require("express");
const { PORT } = require("./config/config");

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.json({ message: "some message"})
})

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}..`));