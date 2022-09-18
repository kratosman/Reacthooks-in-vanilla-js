/* Creating a global variable that will be used to store the state of the application. */
let hooks = []
let currentHooks = 0
/**
 * It takes a callback function and a default state as arguments, and returns an array with the current
 * state and a dispatch function.
 * 
 * The dispatch function takes an action as an argument, and calls the callback function with the
 * current state and the action.
 * 
 * The callback function is the reducer function. It takes the current state and an action as
 * arguments, and returns a new state.
 * 
 * The dispatch function is called when an event is triggered. In this case, the event is a click.
 * 
 * The action is the value of the button that was clicked.
 * 
 * The reducer function is the switch statement. It takes the current state and an action as arguments,
 * and returns a new state.
 * 
 * The current state is the state variable.
 * 
 * The action is the value of the button that was clicked.
 * 
 * The new state is the state variable.
 * @param callback - The function that will be called when the dispatch function is called.
 * @param defaulState - The initial state of the reducer.
 * @returns The state and the dispatch function.
 */
/**
 * It takes a callback function and a default state as arguments, and returns an array with the current
 * state and a dispatch function.
 * 
 * The dispatch function takes an action as an argument, and calls the callback function with the
 * current state and the action.
 * 
 * The callback function is the reducer function. It takes the current state and an action as
 * arguments, and returns a new state.
 * 
 * The dispatch function is called when an event is triggered. In this case, the event is a click.
 * 
 * The action is the value of the button that was clicked.
 * 
 * The reducer function is the switch statement. It takes the current state and an action as arguments,
 * and returns a new state.
 * 
 * The current state is the state variable.
 * 
 * The action is the value of the button that was clicked.
 * 
 * The new state is the state variable.
 * @param callback - The function that will be called when the dispatch function is called.
 * @param defaulState - The initial state of the reducer.
 * @returns The state and the dispatch function.
 */
function useReducer(callback, defaulState) {
    let state = hooks[currentHooks] || defaulState
    function dispatch(option) {
        document.addEventListener('click', (e) => {
            if(option.type != e.target.value){
                return callback(state, option)
            }
        })
    }
    return [state, dispatch]
}

/**
 * The reducer function takes in a state and an action and returns a new state.
 * @param state - This is the current state of the store.
 * @param action - This is an object that contains the type of action that is being performed.
 * @returns the console.log("Hello soul")
 */

function reducer(state,action){
    switch (action.type) {
        case 'TESTING':
            return console.log("Hello soul")
        default:
            return state
    }
}
/**
 * `useReducer` is a React hook that takes a reducer function and an initial state, and returns the
 * current state paired with a dispatch method.
 * 
 * The reducer function takes the current state and an action, and returns a new state.
 * 
 * The dispatch method takes an action, and calls the reducer function with the current state and the
 * action.
 * 
 * The current state is then updated to the new state.
 * 
 * The `useReducer` hook is a more advanced version of the `useState` hook.
 * 
 * The `useState` hook is a function that takes an initial state, and returns the current state paired
 * with a function that updates the state.
 * 
 * The `useReducer` hook is a function that takes a reducer function and an initial state, and returns
 * the current state paired with a dispatch method.
 * 
 * The reducer function takes
 */
const [state, dispatch] = useReducer(reducer, 0)
console.log(state)
function usingReducerFunc(){
    dispatch({type: "TESTING"})
}

/**
 * `useState` is a function that returns an array with two elements: the first element is the current
 * state, and the second element is a function that updates the state.
 * 
 * Let's break down the function.
 * 
 * First, we have a variable called `_val` that stores the default state.
 * 
 * Then, we have a function called `setState` that updates the state.
 * 
 * Finally, we have a variable called `state` that stores the current state.
 * 
 * The `state` variable is set to the value of `hooks[currentHooks]` if it exists, otherwise it is set
 * to the value of `_val`.
 * 
 * The `hooks` array is an array that stores the current state of each hook.
 * 
 * The `currentHooks` variable is a variable that stores the index of the current hook.
 * @param defaultState - The default state of the component.
 * @returns An array with two elements. The first element is the state, the second element is the
 * setState function.
 */
function useState(defaultState) {
    let _val = defaultState
    function setState(newVal) {
        hooks[currentHooks] = newVal
    }
    let state = hooks[currentHooks] || _val 
    return [state, setState]
}

/* Calling the `useState` function with the default state of 0. */
const [item, setState] = useState(0)
console.log(item)