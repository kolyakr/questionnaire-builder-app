import { model, Schema } from "mongoose";

const completedQuizSchema = new Schema({
  quizId: {
    type: Schema.ObjectId,
    required: true,
  },
  answers: {
    type: [String],
    required: true,
  },
  completionTime: {
    type: Number,
    required: true,
  },
  comletedAt: {
    type: Date,
    default: Date.now(),
  },
  progress: {
    type: Map,
    of: String,
    default: {},
  },
});

export const CompletedQuiz = model("completed_quizzes", completedQuizSchema);
