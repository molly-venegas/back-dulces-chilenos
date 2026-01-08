require("dotenv").config();

const express= require("express");
const cors= require("cors");
const Contact= require("./models/contact");
const Pedido= require("./models/pedido");
const connectDB= require("./db");

const app= express();
const PORT=3003;

app.use(cors());
app.use(express.json());

//aqui se define el endpoint para el formulario de contacto
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

//aqui se define el endpoint para el formulario de pedido
app.post("/api/pedido", async (req,res) => {
    console.log("pedido recibido");
    console.log("body:",req.body);

     /*try {
        const {nombre, direccion, telefono}=req.body;
        const pedido= new Pedido({
            nombre,
            direccion,
            telefono
        });
        await pedido.save();

        res.json({ message:"pedido guardado con exito."});

    } catch (error) {
        console.log ("error en el guardado.", error);

        res.json({ message:"error al guardar pedido."});
    }*/
});

//aqui se enciende el backend
(async ()=>{
    await connectDB();

    app.listen(PORT, ()=>
    console.log(`backend corriendo en http://localhost:${PORT}`)
    );
})();