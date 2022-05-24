import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
  Nome: { type: String, required: true, maxlength: 50 },
  Marca: { type: String, required: true, maxlength: 50 },
  Cor: { type: String, required: true, maxlength: 50 },
  Ano: { type: Number, required: true, maxlength: 2022, minlength: 1884 },
  Placa: { type: String, required: true, maxlength: 7, unique: true },
})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)