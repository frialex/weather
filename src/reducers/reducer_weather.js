import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    switch(action.type) {
        case FETCH_WEATHER:
            //concat produces a new state array (vs push which modifies the exisiting state array)
            // return state.concat([ action.payload.data ]);
            //line bellow serves the same purpose
            return [action.payload.data, ...state]
    }

    return state;
}