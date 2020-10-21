import React from 'react';
import {useObserver} from 'mobx-react';
import useStore from '../useStore';
// 기존 class에서는 @나 decorate이용하고 observer로 컴포넌트 감싸주었었음
// 6.xx 버전부터 Hook관련 기능 추가됨!
// return 할 때 useObserver를 반환하고 실제 JSX코드는 콜백으로 넣어주면 됨
const Counter = () =>{
    const {counter} = useStore();

    const increase = () =>{
        counter.increase();
    }

    const decrease = ()=>{
        counter.decrease();
    }

    return useObserver (()=> (
        <div>
            <hi>{counter.number}</hi>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    ))

}
// return 시 useObserver를 반환,
// 실제 JSX코드는 콜백으로
export default Counter;