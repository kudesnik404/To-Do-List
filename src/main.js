function start() {
    const mainCard = document.querySelector('.card');
    const addButton = document.querySelector('.addButton');
    const taskInput = document.querySelector('.task input');
    const checkButton = document.querySelector('.task img');
    const taskList = document.querySelector('.list');

    let arrTasks = [];
    function addingTask() {
        arrTasks.push(taskInput.value);
        console.log(arrTasks);
        
        const newTask = document.createElement('div');
        newTask.classList.add('task');
        taskList.append(newTask);
        const newInput = document.createElement('input');
        newTask.append(newInput)
        const newCheckButton = document.createElement('img');
        newCheckButton.src = 'src/images/checkButton.svg';
        newTask.append (newCheckButton);

        newCheckButton.addEventListener('click', (event) => {
        event.target.src = 'src/images/checkedButton.svg';
   });
    }
    addButton.addEventListener('click', (addingTask))
               

    checkButton.addEventListener('click', (event) => {
         event.target.src = 'src/images/checkedButton.svg';

        }
    });

    












}

window.addEventListener('load', start)