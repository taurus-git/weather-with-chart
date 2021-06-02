import C from '../constants/constatnts';

const forecast = (state = '', action) => {
    switch (action.type) {
        case C.GET_FORECAST:
            return {...state, forecast: action.forecast};
        default:
            return state;
    }
}

export default forecast;