const TodoController = require("../../controllers/todo.controller");

describe("TodoController.crearTodo", () => {
    it("should have a createTodo function", () => {
        expect(typeof TodoController.createTodo).toBe("function");
    });
});