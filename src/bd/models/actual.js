import mongoose from 'mongoose';

const herramientasSchema = new mongoose.Schema({
  NumeroEstacionamiento: {
    type: Number,
    require: true
  },
  Matricula: {
    type: String,
    require: true
  },
  HoraInit: {
    type: String,
    require: true
  },
  HoraFin: {
    type: String,
    require: true
  },
  Tel: {
    type: Number,
    require: true
  },
  DNI: {
    type: Number,
    require: true
  }
});
const Herramienta = mongoose.models.Herramienta || mongoose.model('Herramienta', herramientasSchema);

export default Herramienta;
