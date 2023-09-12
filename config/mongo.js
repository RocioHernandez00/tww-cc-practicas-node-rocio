const mongoose = require("mongoose");

const dbconnetc = async () => {
const DB_URI = process.env.DB_URI;

    try{
        await mongoose.connect(DB_URI, {
        UseNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log('***** CONEXION CORRECTA *****');
    } catch (error) {
        console.log ('***** ERROR DE CONEXION *****', error);
    }     
};

module.exports = dbconnetc;

//mongodb+sr://RocioHernandez:fK4Uzdu3IgVvr6he@cluster0.ky9uds1.mongodb.net/dbapi?retryWrites=true&w=majority





