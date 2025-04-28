class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Methods
  
    // Append method should add a node to the end of the list
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    prepend(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }

    delete(data) {
        if (!this.head) {
          return;
        }
      
        if (this.head.data === data) {
          this.head = this.head.next;
          this.size--;
          return;
        }
      
        let current = this.head;
        let prev = null;
      
        while (current && current.data !== data) {
          prev = current;
          current = current.next;
        }
      
        if (current) {
          prev.next = current.next;
          this.size--;
        }
      }

      find(data) {
        let current = this.head;

        while(current) {
            if(current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
      }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.prepend(5);

console.log(list.size);

console.log(list);
console.log(list.find(20));
console.log(list.find(15));
      

list.delete(10);
console.log(list);