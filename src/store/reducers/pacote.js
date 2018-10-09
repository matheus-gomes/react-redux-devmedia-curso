import { ADD_PACOTE } from '../actions';

const initialState = [
    {
        id: 1,
        nome: 'exemplo'
    }
]

export default function pacote(state = initialState, action) {
    switch(action.type) {
        case ADD_PACOTE:
            return state.concat(action.payload);
        default:
            return state;
    }
}