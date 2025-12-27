const mongoose =require ("mongoose");

const connectDB =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log ("base de datos conectada.");
    } catch (error) {
        console.log ("error de conexion en base de datos.");
    }
};

module.exports=connectDB;
