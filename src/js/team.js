export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Вы уже добавили этого персонажа');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    for (const elem of characters) {
      this.members.add(elem);
    }
  }

  toArray() {
    const arr = [];
    this.members.forEach((elem) => {
      arr.push(elem);
    });
    return arr;
  }

  * [Symbol.iterator]() {
    for (const value of this.members) {
      yield value;
    }
  }
}
