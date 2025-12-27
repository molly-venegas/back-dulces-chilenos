const express= require("express");
const cors= require("cors");

const app= express();
const PORT=3003;

app.use(cors());
app.use(express.json());

app.post("/api/contact", (req,res) => {
    console.log("formulario recibido");
    console.log("body:",req.body);
    console.log ("=======");

    res.json({ ok:true, received: req.body});
});

app.listen(PORT, ()=>
    console.log(`backend corriendo en http://localhost:${PORT}`)
);