
const taskForm = document.getElementById("create-task-form");
const taskInput = document.getElementById("new-task-description");
const taskList = document.getElementById("tasks");
const priorityDropdown = document.getElementById("priority-dropdown");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = taskInput.value;

  const priority = priorityDropdown.value;

  const listItem = document.createElement("li");
  listItem.textContent = taskText;
  listItem.style.color = priority;
  if (priority === 'high') {
    listItem.style.color = 'red'
  } else if (priority === 'medium') {
    listItem.style.color = 'orange'
  } else if (priority === 'low') {
    listItem.style.color = 'green'
  }
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '&#10005;';
  deleteBtn.addEventListener('click', (event) => {
    listItem.remove();
  });

  taskList.appendChild(listItem);

  taskInput.value = "";
});

taskList.addEventListener("click", (event) => {
  const clickedElement = event.target;

  if (clickedElement.tagName === "LI") {
    clickedElement.remove();
  }
});


