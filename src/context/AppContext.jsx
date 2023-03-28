import React, { createContext, useReducer } from 'react';


export const AppReducer = (state, action) => {
    let aboutMe = "show";
    state.aboutMe = aboutMe;
    return state;
};


// 1. Sets the initial state when the app loads
const initialState = {
    aboutMe : "show",
    projects : "hide",
    skills : "hide"
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(initialState);
   

    return (
        <AppContext.Provider
            value={{
                // aboutMe: state.aboutMe,
                // skills: state.skills,
                // projects: state.projects,
                dispatch
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
