import { model, Schema } from "mongoose";

const statisticsSchema = new Schema({
  quizId: { type: Schema.ObjectId, required: true },
  averageCompletionTime: { type: Number, default: 0 },
  completionsByDate: [
    {
      date: { type: Date, required: true },
      completions: { type: Number, required: true, default: 0 },
    },
  ],
  answersStats: {
    type: Map,
    of: Number,
    default: {},
  },
});

export const Statistic = model("statistics", statisticsSchema);
