// return 시 useObserver를 반환,
// 실제 JSX코드는 콜백으로

import React from 'react';
import {useObserver} from 'mobx-react';
import useStore from '../useStore';

const Counter = () =>{
    const {counter} = useStore();

    const increase = () =>{
        counter.increase();
    }

    const 

}