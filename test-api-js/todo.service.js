class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        
        this.todos=this.todos.todo.concat(todo);
        console.log(this.todos);
        // Your code here
    }


    delete_todo(id){
        this.todos = this.todos.filter(todo => todo.description !== id)
        console.log(this.todos);
        // Your code here
    }
    
    update_todo(id, todo){

        this.todos.map(upt => {
            if (upt.description === id) {
                upt.title = todo;
                upt.description=todo;
                upt.done=todo
            }
            //return todo
        })
        console.log(this.todos);
        // Your code here
    }

}


module.exports= todoservice;