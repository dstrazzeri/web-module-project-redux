export const TOGGLE_FAVES = "TOGGLE_FAVES";
export const ADD_FAVE = "ADD_FAVE";
export const REMOVE_FAVE = "REMOVE_FAVE";

export const toggleFaves = ()=> {
    return({type: TOGGLE_FAVES});
}

export const addFave = (movie)=> {
    return({type: ADD_FAVE, payload:movie});
}

export const removeFave = (id)=> {
    return({type: REMOVE_FAVE, payload:id});
}