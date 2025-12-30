require("dotenv").config();

const express= require("express");
const cors= require("cors");
const Contact= require("./models/contact");
const connectDB= require("./db");

const app= express();
const PORT=3003;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req,res) => {
    console.log("formulario recibido");
    console.log("body:",req.body);

    try {
        const {name, email, message}=req.body;
        const contact= new Contact({
            name,
            email,
            message
        });
        await contact.save();

        res.json({ message:"contacto guardado con exito."});

    } catch (error) {
        console.log ("error en el guardado.", error);

        res.json({ message:"error al guardar contacto."});
    }
});
(async ()=>{
    await connectDB();

    app.listen(PORT, ()=>
    console.log(`backend corriendo en http://localhost:${PORT}`)
    );
})();