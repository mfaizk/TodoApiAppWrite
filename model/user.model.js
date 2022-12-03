const { Schema, model } = require("mongoose");

const Task = Schema(
  {
    title: {
      type: String,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Todo = Schema(
  {
    title: {
      type: String,
    },
    task: [Task],
  },
  { timestamps: true }
);

const UserTodo = Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    todo: [Todo],
  },
  { _id: false }
);

module.exports = model("TODO", UserTodo);
