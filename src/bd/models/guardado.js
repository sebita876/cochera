import mongoose from "mongoose";
const guardadoSchema = new mongoose.Schema({
    DNI: {
        type: Number,
        required: true
    },
    Matricula: {
        type: String,
        require: true
    },
    Monto: {
        type: String,
        require: true
    },
    Fecha: {
        type: String,
        require: true,
        default: function () {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return today.toLocaleDateString();
        }
    },
    Tel: {
        type:Number,
        require:true
    }
});

const Guardado = mongoose.models.Guardado || mongoose.model('Guardado', guardadoSchema);



export default Guardado;