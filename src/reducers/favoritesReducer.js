import { TOGGLE_FAVES, ADD_FAVE, REMOVE_FAVE}  from './../actions/favoritesActions';

const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action)=> {
    switch(action.type) {
        case(TOGGLE_FAVES): {
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        }
        case(ADD_FAVE): {
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        }
        case(REMOVE_FAVE): {
            return {
                ...state,
                favorites: state.favorites.filter(item=>(item.id !== action.payload))
            }
        }
        default:
            return(state);
    }
}

export default favoritesReducer;