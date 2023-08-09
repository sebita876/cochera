import mongoose from "mongoose";
function Conectar() {
    mongoose.connect('mongodb+srv://sebita876:mamitalinda164@cochera.t9qfy5k.mongodb.net/');
    mongoose.connection.on('open', _ => {
        console.log('conectao');
    })
}
export default Conectar;