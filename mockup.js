let array = [1, 3, 3, 2, 1, 1, 2, 2];

let count = 1;
let current = thisdothead;
let daisyChain;
let previous = thisdothead;

while (count < 4)
{
if (current.prio !== count)
{
    previous = current;
    current = current.next;
}
if (current.prio == count && current.next !== null)
{
    previous.next = this.next;
    daisyChain = current;
    current = current.next;
}
if (current.prio == count && current.next == null)
{
    this.next = daisyChain;
    count++;
}
}