function start() {
    const mainCard = document.querySelector('.card');
    const addButton = document.querySelector('.addButton');
    const taskInput = document.querySelector('.task input');
    const checkButton = document.querySelector('.task img');
    const taskList = document.querySelector('.list');
    const sortButton = document.querySelector('.sortButton');

    function addingTask() {
        const newTask = document.createElement('div');
        newTask.classList.add('task');
        taskList.append(newTask);
        const newInput = document.createElement('input');
        newTask.append(newInput)
        const newCheckButton = document.createElement('img');
        newCheckButton.src = 'src/images/checkButton.svg';
        newTask.append (newCheckButton);

        newCheckButton.addEventListener('mouseover', (event) => {
            event.target.src = 'src/images/checkedButton.svg';
        })
        newCheckButton.addEventListener('mouseout', (event) => {
            event.target.src = 'src/images/checkButton.svg';
        })
        newCheckButton.addEventListener('click', (event) => {
            
    })
}
    checkButton.addEventListener('mouseover', (event) => {
        event.target.src = 'src/images/checkedButton.svg';
    })
    checkButton.addEventListener('mouseout', (event) => {
        event.target.src = 'src/images/checkButton.svg';
    })
    checkButton.addEventListener('click', (event) => {

    });

    addButton.addEventListener('click', (addingTask))


    












}

window.addEventListener('load', start)