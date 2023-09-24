class Task {
  constructor(newTask, currentList, completedTasks) {
      this.newTask = newTask;
      this.currentList = currentList;
      this.completedList = completedTasks;
      this.completed = false; // new task will not be marked complete
  }
}

const newTask = document.getElementById('newTask');
const addTaskBtnInModal = document.querySelector('#addTaskBtnInModal');
const taskList = document.getElementById('taskList');
const completedTasks = document.getElementById('completedTasks');

addTaskBtnInModal.addEventListener('shown.bs.modal', function(e){
  e.stopPropagation();
});

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

addTaskBtnInModal.addEventListener('click', function (){
  const newTask = document.querySelector('#task-input').value;
  const completedTasks = document.querySelector('
#completed-task').value;
localStorage.setItem('tasks', JSON.stringify(tasks));

document.querySelector('#task-input').value = '';
document.querySelector('#completed-tasks').value ='';
  displayTasks();
});

function diaplayTasks (){
  taskList.innerHTML = '';
  if (task.completed){
    taskList.style.textDecoration = 'line-through';
  }
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complese Task';
  completeButton.classList.add('btn' , 'btn-sm', 'btn-success');
  completeButton.addEventListener('click', () => toggleTaskCompletio(index));
}
displayTasks();


