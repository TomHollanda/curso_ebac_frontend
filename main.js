$(document).ready(function() {
    const taskInput = $(".task-input");
    const addTaskButton = $(".add-task-button");
    const todosList = $(".todos-list");
    const filterButtons = $(".filter-btn");

    addTaskButton.on("click", addTask);
    taskInput.on("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.val().trim();
        if (taskText !== "") {
            const todoItem = createTodoItem(taskText);
            todosList.append(todoItem);
            taskInput.val("");
        }
    }

    function createTodoItem(taskText) {
        const todoItem = $("<li>", {
            "class": "todo-item",
            on: {
                click: function() {
                    const item = $(this);
                    item.toggleClass("completed");
                    const targetList = item.hasClass("completed") ? $(".completed-todos") : todosList;
                    item.appendTo(targetList);
                    filterTodos($(".filter-btn.active").data("status"));
                }
            }
        }).append(
            $("<input>", { type: "checkbox" }), // Adiciona a caixa de seleção
            $("<span>").text(taskText), // Texto da tarefa
            $("<button>", {
                "class": "delete-btn",
                text: "X",
                on: {
                    click: function(e) {
                        e.stopPropagation();
                        $(this).closest(".todo-item").remove();
                    }
                }
            })
        );
        return todoItem;
    }
    


todosList.on("dblclick", ".todo-item", function() {
    const item = $(this);
    item.toggleClass("completed");
    const targetList = item.hasClass("completed") ? $(".completed-todos") : todosList;
    item.appendTo(targetList);
    filterTodos($(".filter-btn.active").data("status"));
});


filterButtons.on("click", function() {
    filterButtons.removeClass("active");
    $(this).addClass("active");
    const status = $(this).data("status");
    filterTodos(status);
});


    function filterTodos(status) {
        $(".todo-item").each(function() {
            const todo = $(this);
            const isCompleted = todo.hasClass("completed");
    
            if (status === "all" || (status === "pending" && !isCompleted) || (status === "completed" && isCompleted)) {
                todo.show();
            } else {
                todo.hide();
            }
        });
    }
    
});
