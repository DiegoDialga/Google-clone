export const initialState = {
    term: ''
};

export const actionTypes = {
    SET_INPUT: 'SET_INPUT'
};

const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case actionTypes.SET_INPUT:
            return{
                ...state, term: action.term
            };

        default:
            return state;
  }
};

export default reducer;