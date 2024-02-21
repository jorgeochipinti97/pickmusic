import mongoose from "mongoose";

const perfilSchema = new mongoose.Schema(
  {
    firstPhrase: { type: String },
    secondPhrase: { type: String },
    music: { type: String },
    images: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const PerfilPickMusic =
  mongoose.models.PerfilPickMusic ||
  mongoose.model("PerfilPickMusic", perfilSchema);

export default PerfilPickMusic;
