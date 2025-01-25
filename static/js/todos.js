document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar');
    const todoList = document.getElementById('todo-list');
  
    // Search functionality
    searchBar.addEventListener('input', function (e) {
      const searchValue = e.target.value.toLowerCase();
      const tasks = todoList.getElementsByTagName('li');
  
      Array.from(tasks).forEach((task) => {
        const taskText = task.querySelector('span').textContent.toLowerCase().trim();
  
        if (taskText.includes(searchValue)) {
          task.style.display = 'block'; // Show matching tasks
        } else {
          task.style.display = 'none'; // Hide non-matching tasks
        }
      });
    });
});
