function start() {
    const addButton = document.querySelector('.button');
    const taskList = document.querySelector('.list');
    const sortButton = document.querySelector('.sortButton');

    let num = -1;

    addingTask();
    function addingTask() {
        num++;
        const newTask = document.createElement('div');
        newTask.classList.add('task');
        taskList.append(newTask);
        const newInput = document.createElement('input');
        newTask.append(newInput)
        const newCheckButton = document.createElement('img');
        newCheckButton.src = 'src/images/checkButton.svg';
        newTask.append (newCheckButton);

        newInput.focus();

        newTask.draggable = true;
        newTask.addEventListener('dragstart', dragAndDrop);
        newTask.addEventListener('dragend', dragAndDrop);
        newTask.addEventListener('dragenter', dragAndDrop);

        newCheckButton.addEventListener('mouseover', (event) => {
            event.target.src = 'src/images/checkedButton.svg';
        })
        newCheckButton.addEventListener('mouseout', (event) => {
            event.target.src = 'src/images/checkButton.svg';
        })
        newCheckButton.addEventListener('click', () => {  
            if (num > 0) { 
                newTask.remove()
                num--;
            } else {
                newInput.value = ""
            }
        })
    }

    addButton.addEventListener('click', addingTask)
    document.addEventListener('keyup', (event) => {
        if (event.keyCode == '13') {
            addingTask();
        } else {}
    });

    function sorting() {
        let num = -1;
        if (sortButton.classList.contains('sortButton3')) {
        sortButton.classList.remove('sortButton3');
        sortButton.classList.add('sortButton4');
        let arr = [];
        const everyTask = document.querySelectorAll('.task');
        everyTask.forEach((element) => {
            if (isNaN(element.querySelector('input').value)) {
                arr.push(element);
            } else {
                arr.unshift(element);
            }
            arr.sort(function(a, b){
                let taskA = a.firstElementChild.value.toLowerCase(); 
                let taskB = b.firstElementChild.value.toLowerCase();
                if (isNaN(taskA) && isNaN(taskB)) {
                    if (taskA < taskB) {
                        return -1;
                    } else if (taskA > taskB) {
                        return 1;
                    } else {
                        return 0;
                    }
                } else {
                    if (+taskA < +taskB) {
                        return -1;
                    } else if (+taskA > +taskB) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            })
            element.remove()
        })
            for (let i = 0; i < arr.length; i++) {
                const newTask = document.createElement('div');
                newTask.classList.add('task');
                taskList.append(newTask);
                const newInput = document.createElement('input');
                newInput.value = arr[i].firstElementChild.value;
                newTask.append(newInput)
                const newCheckButton = document.createElement('img');
                newCheckButton.src = 'src/images/checkButton.svg';
                newTask.append (newCheckButton);
                num++
                
                newTask.draggable = true
                newTask.addEventListener('dragstart', dragAndDrop);
                newTask.addEventListener('dragend', dragAndDrop);
                newTask.addEventListener('dragenter', dragAndDrop);

                if ((arr[i].firstElementChild.value == "") && (arr.length > 1)) {
                    newTask.remove();
                    num--;
                }

                newCheckButton.addEventListener('mouseover', (event) => {
                    event.target.src = 'src/images/checkedButton.svg';
                })
                newCheckButton.addEventListener('mouseout', (event) => {
                    event.target.src = 'src/images/checkButton.svg';
                })
                newCheckButton.addEventListener('click', () => { 
                    if (num > 0) { 
                        newTask.remove()
                        num--;
                    } else {
                        newInput.value = ""
                    }
                })
            }

    } else if (sortButton.classList.contains('sortButton4')) {
        sortButton.classList.add('sortButton3');
        sortButton.classList.remove('sortButton4');
                    let arr = [];
                    const everyTask = document.querySelectorAll('.task');
                    everyTask.forEach((element) => {
                        arr.push(element);
                        arr.sort(function(a, b){
                            let taskA = a.firstElementChild.value.toLowerCase(); 
                            let taskB = b.firstElementChild.value.toLowerCase();
                            if (isNaN(taskA) && isNaN(taskB)) {
                                if (taskA > taskB) {
                                    return -1;
                                } else if (taskA < taskB) {
                                    return 1;
                                } else {
                                    return 0;
                                }
                            } else {
                                if (+taskA > +taskB) {
                                    return -1;
                                } else if (+taskA < +taskB) {
                                    return 1;
                                } else {
                                    return 0;
                                }
                            }
                        })
                        element.remove()
                        let num = 0;
                    })
                    for (let i = 0; i < arr.length; i++) {
                        const newTask = document.createElement('div');
                        newTask.classList.add('task');
                        taskList.append(newTask);
                        const newInput = document.createElement('input');
                        newInput.value = arr[i].firstElementChild.value;
                        newTask.append(newInput)
                        const newCheckButton = document.createElement('img');
                        newCheckButton.src = 'src/images/checkButton.svg';
                        newTask.append (newCheckButton);
                        num++

                        newTask.draggable = true;
                        newTask.addEventListener('dragstart', dragAndDrop);
                        newTask.addEventListener('dragend', dragAndDrop);
                        newTask.addEventListener('dragenter', dragAndDrop);

                        if ((arr[i].firstElementChild.value == "") && (arr.length > 1)) {
                            newTask.remove();
                            num--;
                        }
                        newCheckButton.addEventListener('mouseover', (event) => {
                            event.target.src = 'src/images/checkedButton.svg';
                        })
                        newCheckButton.addEventListener('mouseout', (event) => {
                            event.target.src = 'src/images/checkButton.svg';
                        })
                        newCheckButton.addEventListener('click', () => {
                            if (num > 0) { 
                                newTask.remove()
                                num--;
                            } else {
                                newInput.value = ""
                            }
                        })
                    } 
        }
    }
    sortButton.addEventListener('mouseover', () => {
        if (sortButton.classList.contains('sortButton1')) {
            sortButton.classList.remove('sortButton1');
            sortButton.classList.add('sortButton3');
        } else if (sortButton.classList.contains('sortButton2')) {
            sortButton.classList.remove('sortButton2');
            sortButton.classList.add('sortButton4');
        }
    })
    sortButton.addEventListener('mouseout', () => {
        if (sortButton.classList.contains('sortButton4')) {
            sortButton.classList.remove('sortButton4');
            sortButton.classList.add('sortButton2');
        } else if (sortButton.classList.contains('sortButton3')) {
            sortButton.classList.remove('sortButton3');
            sortButton.classList.add('sortButton1');
        }
    })
    sortButton.addEventListener('click', sorting);

    let activeTask = null;
    function dragAndDrop(event) {
        switch (event.type) {
            case 'dragstart':
                activeTask = event.currentTarget;
                event.currentTarget.classList.add('select');
                break;
            case 'dragend':
                event.currentTarget.classList.remove('select');
                break;
            case 'dragenter':
                if (event.currentTarget.classList.contains('task')) {
                    changeTasks(activeTask, event.currentTarget);
                }
                break;
        }
    }
    function changeTasks(active, other) {
        const arr = [...active.parentElement.children];
        const activeIndex = arr.findIndex(element => element === active);
        const otherIndex = arr.findIndex(element => element === other);
        
        if (activeIndex < otherIndex) {
            active.parentElement.insertBefore(other, active);
        } else if (activeIndex > otherIndex) {
            active.parentElement.insertBefore(active, other);
        }
    }
}
window.addEventListener('load', start)
