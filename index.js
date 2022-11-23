class ToDoItem
{
    constructor(data, prio, description, next = null)
    {
        this.data = data;
        this.priorityLevel = prio;
        this.description = description;
        this.next = next;
    }

};

class ToDoList
{
    constructor (head, next = null)
    {
        this.head = null;
        this.size = 0;
        this.next = null;
        
    }

    addItemToList(data, prio, description)
    {
        this.head = new ToDoItem (data, prio, description, this.head);
        this.date = new Date();
        
    }

   

    printListData()
    {
        let current = this.head;

        while(current)
        {
        console.log(current.data);
        current = current.next;
        }
    }

    clearList()
    {
        this.head = null;
        this.size = 0;
    }
};


//HTML Crap

let button = document.querySelector('.submit');
let element = document.createElement('li');
let list = document.querySelector('.list');

button.addEventListener('click', () =>
{
    let li = list.appendChild(element);
    let inputValue = document.querySelector('.input').value;
    li.innerHTML = inputValue;
    
})

function createMenuItem(input) {
    let li = document.createElement('li');
    li.textContent = input;
}

