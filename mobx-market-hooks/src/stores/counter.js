import { observable } from 'mobx';
// observable: 관찰 받고 있는 state

const counter = observable({
  number: 1,
  increase() {
    this.number++;
  },
  decrease() {
    this.number--;
  },
});

export { counter };
