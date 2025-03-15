import createHttpError from "http-errors";
import { Question } from "../db/models/Question.js";
import { Quiz } from "../db/models/Quiz.js";

export const getQuizzes = async ({
  page,
  perPage,
  sortBy = "name",
  order = "asc",
}) => {
  const sortOrder = order === "desc" ? -1 : 1;

  const query = Quiz.find();

  const total = await Quiz.countDocuments();

  const quizzes = await query
    .sort({ [sortBy]: sortOrder })
    .skip((page - 1) * perPage)
    .limit(perPage);

  return {
    quizzes,
    total,
    totalPages: Math.ceil(total / perPage),
    currentPage: page,
  };
};

export const createQuiz = async (payload) => {
  console.log("create quiz data: ", payload);

  return await Quiz.create(payload);
};

export const deleteQuiz = async (id) => {
  const quiz = await Quiz.findByIdAndDelete(id);
  if (!quiz) {
    throw createHttpError(404, "Quiz not found");
  }

  await Question.deleteMany({ quizId: id });
};

export const updateQuiz = async (id, payload) => {
  return await Quiz.findOneAndUpdate(
    {
      _id: id,
    },
    payload,
    {
      new: true,
    }
  );
};
