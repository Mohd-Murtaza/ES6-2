class customArr{
    constructor(){
      this.size=0
      for(let i=0; i<arguments.length; i++)
        {
          this[i]=arguments[i];
          this.size++
        }
    }
    push(ele){
      this[this.size]=ele;
      this.size++
    }
    
  pop() {
      if (this.size === 0) {
        return undefined;
      }
      const lastInd = this.size - 1;
      const popElement = this[lastInd];
      delete this[lastInd];
      this.size--;
      return popElement;
    }
  
    top() {
      if (this.size === 0) {
        return undefined;
      }
      return this[this.size - 1];
    }
  
    print() {
      const elements = [];
      for (let i = 0; i < this.size; i++) {
        elements.push(this[i]);
      }
      console.log('[' + elements.join(',') + ']');
    }
  
    printReverse() {
      const elements = [];
      for (let i = this.size - 1; i >= 0; i--) {
        elements.push(this[i]);
      }
      console.log('[' + elements.join(',') + ']');
    }
  }
  
  // Example usage:
  const myArr = new customArr(6,7,8,1,2,3);
  myArr.push(5);
  myArr.print(); // Output: [1,2,3,4,5]
  myArr.pop();
  myArr.print(); // Output: [1,2,3,4]
  console.log(myArr.top()); // Output: 4
  myArr.printReverse(); // Output: [4,3,2,1]
  console.log(myArr.size); // Output: 4
  