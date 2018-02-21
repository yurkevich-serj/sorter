'use strict'
class Sorter {
  constructor() {
    this.array = [];
     this.compare = function (a,b) { return a - b };
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let array1 = [];
    indices.sort(function(a,b) {return a-b});
    for(let i=0; i<indices.length; i++) {
      array1.push(this.array[indices[i]]);
    }
    array1.sort(this.compare);
     
    
    for(let i=0; i<indices.length; i++) {
      this.array[indices[i]]=array1[i];
      
    }
    return this.array;
    
  }

  setComparator(compareFunction) {
    this.compare=  compareFunction;
  }
}

module.exports = Sorter;