const mongoose = require("mongoose");


const TodoShema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    done: {
        type: Boolean,
        required: true
    }
});

const TodoModel = mongoose.model("Todo", TodoShema);

module.exports = TodoModel;