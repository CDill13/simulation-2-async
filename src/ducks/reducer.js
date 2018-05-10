const initialState = {

}

//constants defining update types
const UPDATE_PROP_NAME = "UPDATE_PROP_NAME";
const UPDATE_PROP_DESC = "UPDATE_PROP_DESC";

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_PROP_NAME:
            return Object.assign({}, state, {propName: action.payload});
        case UPDATE_PROP_DESC:
            return Object.assign({}, state, {propDesc: action.payload});
        default: return state;
    }
}

export function updatePropName(propName){
    return {
        type: UPDATE_PROP_NAME,
        payload: propName
    }
}

export function updatePropDesc(propDesc){
    return{
        type: UPDATE_PROP_DESC,
        payload: propDesc
    }
}

export default reducer;