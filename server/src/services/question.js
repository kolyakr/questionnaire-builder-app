import createHttpError from "http-errors";
import { Question } from "../db/models/Question.js";
import { Quiz } from "../db/models/Quiz.js";

export const getQuestions = async (quizId) => {
  return await Question.find({
    quizId: quizId,
  });
};

export const createQuestion = async (payload) => {
  const isQuizExist = await Quiz.findOne({
    _id: payload.quizId,
  });

  if (!isQuizExist) {
    throw createHttpError(404, "Quiz not found");
  }

  return await Question.create(payload);
};

export const deleteQuestion = async (questionId) => {
  return await Question.deleteOne({
    _id: questionId,
  });
};

export const updateQuestion = async (questionId, payload) => {
  return await Question.findOneAndUpdate(
    {
      _id: questionId,
    },
    payload,
    {
      new: true,
    }
  );
};
