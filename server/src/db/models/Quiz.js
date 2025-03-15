import { model, Schema } from "mongoose";

const quizSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amountOfQuestions: {
    type: Number,
    required: true,
    default: 0,
  },
  amountOfCompletions: {
    type: Number,
    required: true,
    default: 0,
  },
  userId: {
    type: Schema.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  questionsOrder: {
    type: [Schema.ObjectId],
    default: [],
  },
  isDraft: {
    type: Boolean,
    default: false,
  },
});

export const Quiz = model("quizzes", quizSchema);
