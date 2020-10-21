// market 데이터 스토어도 만들 것이기 때문에 stores라는 폴더 생성.

import { observable } from 'mobx';

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
