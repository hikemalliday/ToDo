

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

    insertItemFirst(data, prio, description)
    {
        this.head = new ToDoItem (data, prio, description, this.head);
        this.date = new Date();
        
    }

    insertItemLast(data, prio, description)
    {
        let node = new ToDoItem (data, prio, description)
        let current;

        //If empty, make head:
        if(!this.head)
        {
            this.head = node;
        }
        else
        {
            current = this.head;

            while(current.next)
            {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    insertItemAt(data, prio, description, index)
    {
        // If index is out of range:
        if(index > 0 && index > this.size)
        {
            return;
        }

        // If first index
        if(index == 0) 
        {
            this.head = new ToDoItem(data, prio, description, this.head);
            this.date = new Date();
            return;
        }

        const node = new ToDoItem(data, prio, description, this.head);
        this.date = new Date();
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while(count < index)
        {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    sortListByPrio()
    {
        let count = 1;
        let current = this.head;
        let previous = this.head;
        let daisyChain;

        while (count < 4)
            {
                
                
            if (current.priorityLevel !== count)
                {
                previous = current;
                current = current.next;
                console.log("Current prio level: " + current.priorityLevel + ' Count:' + count)
                }
            if (current.priorityLevel == count && current.next !== null)
                {
                previous.next = current.next;
                console.log("Unorphaning" + "prev.next = " + previous.next + "current.next: " + current.next)
                previous = current;
                daisyChain = current;
                current = current.next;
                }
            if (current.priorityLevel == count && current.next == null)
                {
                current.next = daisyChain;
                count++;
                }
            if (current.priorityLevel > count)
                {
                count = current.priorityLevel;
                
                
                if (current.priorityLevel == count && current.next !== null)
                {
                previous.next = current.next;
                console.log("Unorphaning" + "prev.next = " + previous.next + "current.next: " + current.next)
                previous = current;
                daisyChain = current;
                current = current.next;
                }

            if (current.priorityLevel == count && current.next == null)
                {
                current.next = daisyChain;
                count++;
                }
            }
        }  
            this.printListData();
    }

    getItemValueAt(index)
    {
        let current = this.head;
        let count = 0;

        
        

        while(current)
        {
            if(count == index)
            {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return null;
    }

    removeAt(index)
    {
        if(index > 0 && index > this.size)
        {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if(index === 0)
        {
            this.head = current.next;
        }
        else 
        {
            while(count < index)
            {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }
        this.size--;
    }   
   
    getItemFullDataAtIndex(index)
    {
        
        let current = this.head;
        let count = 0;

        while(current)
        {
            if(count == index - 1)
            {
                console.log(`Data: ${current.data}, Priority Level: ${current.priorityLevel}, Description: ${current.description}, Next Node: ${current.next}`);
            }
            count++;
            current = current.next;
        }

        return;
    }

    printListData()
    {
        let current = this.head;
        let indexNumber = 1;
        while(current)
        {
        console.log(`${indexNumber}. ` + current.data);
        current = current.next;
        indexNumber++;
        
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

const linkedList = new ToDoList;

//Not sure if I need 'this.head' on line 77

//InsertAt needs fixed, possible because of 'Count' not implemented

linkedList.insertItemLast('Go to Jim', 2, 'Pump it');
linkedList.insertItemLast('Eat food', 3, 'Cook it');
linkedList.insertItemLast('Cardio', 1, 'Walk it');
linkedList.insertItemLast('Leet Code', 2, 'Grind it');
linkedList.insertItemLast('Projects', 3, 'Build it');
linkedList.insertItemLast('Dinner', 1, 'Eat it');


linkedList.printListData();

linkedList.sortListByPrio();





























