import createHttpError from "http-errors";
import {
  createQuestion,
  deleteQuestion,
  getQuestions,
  updateQuestion,
} from "../services/question.js";
import { saveToCloudinary } from "../utils/saveToCloudinary.js";

export const getQuestionsCtrl = async (req, res) => {
  const { quizId } = req.params;

  const questions = await getQuestions(quizId);

  res.json({
    status: 200,
    data: {
      questions,
    },
  });
};

export const createQuestionCtrl = async (req, res) => {
  const file = req.file;
  let imageUrl = null;

  if (file) {
    imageUrl = await saveToCloudinary(file);
  }

  let payload = req.body;

  if (!imageUrl) {
    throw createHttpError(500, "Failed to download image globally");
  } else {
    payload = { ...payload, imageUrl: imageUrl };
  }

  const question = await createQuestion(payload);

  res.json({
    status: 201,
    message: "Question created succesfully",
    data: {
      question,
    },
  });
};

export const deleteQuestionCtrl = async (req, res) => {
  const { questionId } = req.params;

  await deleteQuestion(questionId);

  res.json({
    status: 204,
    message: "Question deleted",
  });
};

export const updateQuestionCtrl = async (req, res) => {
  const { questionId } = req.params;
  const payload = req.body;

  const updatedQuestion = await updateQuestion(questionId, payload);

  res.json({
    status: 200,
    message: "Question updated",
    data: {
      question: updatedQuestion,
    },
  });
};
