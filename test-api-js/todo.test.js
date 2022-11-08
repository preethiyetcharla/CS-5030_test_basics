

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    test("add_todo", () => {
        todo_add={
            "title": "Test_Case_1",
            "description": "Test_Description_1",
            "done": false}
            todo_service.add_todo(todo_add);
            expect(todo_service.get_todos().length).toEqual(4);});

    test("delete_todo", () => {
        todo_service.delete_todo("D1");
        expect(todo_service.get_todos().length).toEqual(1);
    });
    test("update_todo", () => {
        todo_service.update_todo("Test_Description_1","Update_Test-1");
        expect(todo_service.get_todos().filter(test=>test.description==="Update_Test-1").length).toEqual(1);
     });
    

    // Write all your test cases here that corresponds to software requirements


});