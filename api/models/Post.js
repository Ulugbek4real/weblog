const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: false,
    },
    text: {
        type: String,
        required: true,
    },userPic: {
        type: String,
        required: false,
    },long: {
        type: Number,
        required: true,
    },
  },
  {timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);