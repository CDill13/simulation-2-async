const initialState = {

}

//constants defining update types
const UPDATE_PROP_NAME = "UPDATE_PROP_NAME";
const UPDATE_PROP_DESC = "UPDATE_PROP_DESC";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMG_URL = "UPDATE_IMG_URL";
const UPDATE_LOAN_AMOUNT = "UPDATE_LOAN_AMOUNT";
const UPDATE_MONTHLY_MORTGAGE = "UPDATE_MONTHLY_MORTGAGE";
const UPDATE_DESIRED_RENT = "UPDATE_DESIRED_RENT";
const PUT_USER_ON_PROPS = "PUT_USER_ON_PROPS";

function reducer(state = initialState, action){
    // console.log("reducer activated, action: ", action);
    switch(action.type){
        case UPDATE_PROP_NAME:
            return Object.assign({}, state, {propName: action.payload});
        case UPDATE_PROP_DESC:
            return Object.assign({}, state, {propDesc: action.payload});
        case UPDATE_ADDRESS:
            return Object.assign({}, state, {address: action.payload});
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload});
        case UPDATE_STATE:
            return Object.assign({}, state, {state: action.payload});
        case UPDATE_ZIP:
            return Object.assign({}, state, {zip: action.payload});
        case UPDATE_IMG_URL: 
            return Object.assign({}, state, {imgURL: action.payload});
        case UPDATE_LOAN_AMOUNT: 
            return Object.assign({}, state, {loanAmount: action.payload});
        case UPDATE_MONTHLY_MORTGAGE:
            return Object.assign({}, state, {monthlyMortgage: action.payload});
        case UPDATE_DESIRED_RENT:
            return Object.assign({}, state, {desiredRent: action.payload});
        case PUT_USER_ON_PROPS: 
            // console.log("putUserOnProps", action.payload);
            return Object.assign({}, state, {user: action.payload});
        default: return state;
    }
}

export function updatePropName(propName){
    return {
        type: UPDATE_PROP_NAME,
        payload: propName
    };
}

export function updatePropDesc(propDesc){
    return{
        type: UPDATE_PROP_DESC,
        payload: propDesc
    };
}

export function updateAddress(address){
    return{
        type: UPDATE_ADDRESS,
        payload: address
    };
}

export function updateCity(city){
    return{
        type: UPDATE_CITY,
        payload: city
    };
}

export function updateState(state){
    return{
        type: UPDATE_STATE,
        payload: state
    };
}

export function updateZip(zip){
    return{
        type: UPDATE_ZIP,
        payload: zip
    };
}

export function updateImgURL(imgURL){
    return{
        type: UPDATE_IMG_URL,
        payload: imgURL
    };
}

export function updateMonthlyMortgage(monthlyMortgage){
    return{
        type: UPDATE_MONTHLY_MORTGAGE,
        payload: monthlyMortgage
    };
}

export function updateLoanAmount(loanAmount){
    return{
        type: UPDATE_LOAN_AMOUNT,
        payload: loanAmount
    };
}

export function updateDesiredRent(desiredRent){
    return{
        type: UPDATE_DESIRED_RENT,
        payload: desiredRent
    };
}

export function putUserOnProps(user){
    // console.log("action creator putUserpnProps", user);
    return{
        type: PUT_USER_ON_PROPS,
        payload: user
    };
}

export default reducer;