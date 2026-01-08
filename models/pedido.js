const mongoose =require ("mongoose");

const PedidoSchema =new mongoose.Schema(
    {
        nombre:{
            type: String,
            required: true,
        },
        direccion:{
            type: String,
            required: true,
        },
        telefono:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports= mongoose.model("Pedido",PedidoSchema);