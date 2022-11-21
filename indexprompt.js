//Metadata (modules)
const prompt = require('prompt-sync')();

//Classes
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

//User prompt function:
const getUserInput = function()
 {
    let data = prompt('Hello, what would you like to do today?');
    let priority = prompt('On a scale of 1 to 3, how important is this?');
    let description = prompt('Type a short description of this task');

    let firstItem = items.addItemToList(data, priority, description);

    boolean();

}

const boolean = function()
    {
    let boolean = prompt('Would you like to add more items? Y/N');
    
    if (boolean == 'Y' || boolean == 'y')
    {
        getUserInput();
    }
    if (boolean == 'N' || boolean == 'n')
    {
        items.printListData();
        console.log('Good luck on your day!')
    }
    }

let first = new ToDoItem();
let items = new ToDoList();

getUserInput();















