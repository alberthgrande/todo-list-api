import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface ITodo extends Document {
  _id: ObjectId;
  title: string;
  description: string;
}

const TodoSchema = new Schema<ITodo>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ITodo>("Todo", TodoSchema);
