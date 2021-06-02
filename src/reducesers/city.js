import C from '../constants/constatnts';

const city = (state = '', action) => {
    switch (action.type) {
        case C.ADD_CITY:
            return {...state, name: action.name};
        default:
            return state;
    }
}

export default city;