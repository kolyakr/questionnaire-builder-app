import { model, Schema } from "mongoose";
import { QUESTION_TYPE } from "../../constants/index.js";

const questionSchema = new Schema({
  type: {
    type: String,
    enum: [...Object.values(QUESTION_TYPE)],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  variants: {
    type: [String],
    default: undefined,
    validate: {
      validator: function (value) {
        return (
          this.type === QUESTION_TYPE.TEXT ||
          (Array.isArray(value) && value.length > 0)
        );
      },
      message: "Variants are required for non-text questions.",
    },
  },
  answers: {
    type: [String],
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  quizId: {
    type: Schema.ObjectId,
    required: true,
  },
});

export const Question = model("questions", questionSchema);
