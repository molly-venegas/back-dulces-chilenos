const mongoose =require ("mongoose");

const PedidoSchema =new mongoose.Schema(
    {
        client:{
            nombre: {type: String, required: true}, 
            direccion: {type: String, required: true}, 
            telefono: {type: String, required: true} 
        },
        cart:[{
                id: {type: String, required: true}, 
                name: {type: String, required: true}, 
                description: {type: String, required: true}, 
                price: {type: Number, required: true}, 
                quantity: {type: Number, required: true}
            }],
        total:{type: Number, required: true}
    },
    {
        timestamps: true,
    }
);

module.exports= mongoose.model("Pedido",PedidoSchema);