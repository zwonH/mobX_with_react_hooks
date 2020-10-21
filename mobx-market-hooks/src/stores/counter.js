import {observable} from 'mobx';

const counter = observable({
    number :1,
    increase=()=>{
        number++;
    },
    decrease=()=>{
        number--;
    }

})

export {counter};

