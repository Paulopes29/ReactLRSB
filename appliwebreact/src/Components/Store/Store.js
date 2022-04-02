import React, {createContext, useReducer} from 'react';

//On initialise la valeur a false
const initialState = {
    menuCollapse: false,
};

//Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'true':
            return {
                ...state,
                menuCollapse: true
            };
        case 'false':
            return {
                ...state,
                menuCollapse: false
            };
        default:
            return state;
    }
};

const MenuCollapseContext = createContext();

export const MenuCollapseProvider = ({children}) => {

    const [store, dispatch] = useReducer(reducer, initialState)

    return (
        <MenuCollapseContext.Provider value={[store, dispatch]}>
            {children}
        </MenuCollapseContext.Provider>
    );
}
