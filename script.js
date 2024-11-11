const addBtn = document.querySelector(".add-task");
const taskContainer = document.querySelector("#todoList");

const todolists = {
    tasks: [],
    addTask : function(task) {
        this.tasks.push(task);
    },
    showTask: function() {
        taskContainer.innerHTML = '';
        for (const task of this.tasks) {
            const li = document.createElement('li');
            li.className = 'todo-item';
            li.textContent = `${task.name} - ${task.date}`;
            taskContainer.appendChild(li);
        }
    }
}


function TODO(name, date) {
    this.name = name;
    this.date = date;
}
TODO.prototype.checkDate = function () {
    const now = new Date();
    const date = new Date(this.date);
    if(now > date) return false;
    return true    
}


addBtn.addEventListener("click", () => {
    const name = document.querySelector("#taskInput").value;
    const date = document.querySelector("#dateInput").value;
    if(name === "" || date === "") return;
    const todo = new TODO(name, date);
    const datesCheck = todo.checkDate();
    if(!datesCheck) {
        alert("The date is not correct");
        return;
    }
    todolists.addTask(todo);
    console.log(todolists);
    todolists.showTask();
    
})





