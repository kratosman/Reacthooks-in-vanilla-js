/**
 * UseState is a function that returns an array of two functions, the first function returns the
 * current state, the second function is used to update the state.
 */
//USESTATE
export default function useState(initialState) {    
    let hooks = [];
    let currentHooks = 0;
    function setState(newVal) {
        hooks[currentHooks] = newVal
    }
    let state = () => { return hooks[currentHooks] || initialState } 
    return [state, setState]
}
const [item, setItem] = useState(0)
let items = item();
function handlerEventUseState() {
    console.log(items++)
}

/**
 * UseReducer is a function that takes a reducer and an initial state as arguments and returns a state
 * and a dispatch function.
 * @param reducer - a function that takes the current state and an action, and returns a new state.
 * @param initialState - The initial state of the reducer.
 * @returns The state and dispatch function.
 */
//USEREDUCER
function useReducer(reducer,initialState) {
    let state = () => {
        return initialState
    }
    function dispatch(options) {
        onclick = function(e) {
            if(options.type != e.target.value) {
                return reducer(state, options)
            }
        }
    }
    return[state, dispatch]
}

/* Setting the initial state of the count to 0. */
let initialState = {
    count: 0
}
/**
 * The reducer function takes in the current state and an action, and returns the next state.
 * @param state - The current state of the store.
 * @param action - An object that represents the action that is being dispatched.
 * @returns the console.log of the state.count++.
 */
function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return console.log(state().count++)
        default:
            return state;
    }
} 
/**
 * The useReducer hook takes a reducer function and an initial state, and returns an array containing
 * the current state and a dispatch function.
 * 
 * The reducer function takes the current state and an action, and returns the new state.
 * 
 * The dispatch function takes an action, and calls the reducer function with the current state and the
 * action.
 * 
 * The useReducer hook is a way to manage state in React. It's similar to the useState hook, but
 * useReducer is more powerful.
 * 
 * The useState hook is a way to manage state in React. It's similar to the useReducer hook, but
 * useState is simpler.
 * 
 * The useState hook is a way to manage state in React. It's similar to the useReducer hook, but
 * useState is simpler.
 * 
 * The useState hook is a way to manage state in React. It's
 */
const [state, dispatch] = useReducer(reducer, initialState)
function handlerEvent() {
    dispatch({type: "INCREMENT"})
}
