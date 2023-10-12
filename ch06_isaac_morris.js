// isaac morris
// chapter 6 homework


// this was the best i could do.
// it does not work.

class Group {
  
  constructor (group) {
    this.group = [];
  }

  add(x) {
    if (!this.group.includes(x)) {
      this.group.push(x);
    }
  }

  static from(obj) {
    // chat GPT recommended static so .from could work
    for (let i of obj) {
      this.group.add(i);
    }
  }

}

let group = Group.from([10, 20]);
