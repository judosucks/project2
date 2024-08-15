import Button from "../component/Button";
import {useReducer} from "react";
import Panel from "../component/Panel";
import {produce} from "immer";
const INCREMENT = 'increase the count'
const VALUE_TO_ADD = 'value to add'
const DECREMENT = 'decrease the count'
const ADDED_VALUE = 'value been added'
const VALUE_TO_ZERO = 'value to zero'

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case ADDED_VALUE:
            return {
                ...state,
                count: action.payload
            }
        case VALUE_TO_ZERO:
            return {
                ...state,
                valueToAdd: action.payload
            }
        default:
           return state
    }

    // if (action.type === 'increment') {     return {         ...state, count:
    // state.count + 1     } } if (action.type === "value-to-add") { return {
    // ...state,         valueToAdd: action.payload     } } if (action.type ===
    // "decrement") {     return {         ...state,         count: state.count - 1
    //  } } if (action.type === "value-added") { return { ...state,     count:
    // action.payload } } if (action.type === 'valueAddToZero') { return { ...state,
    //     valueToAdd: action.payload } } return state

}

function CounterPage({initialCount}) {

    const [state,
        dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })

    const increment = () => {
        dispatch({type: INCREMENT, payload: state.count})
    }
    const decrement = () => {
        dispatch({type: DECREMENT, payload: state.count})
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0
        dispatch({type: VALUE_TO_ADD, payload: value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(state)
        dispatch({
            type: ADDED_VALUE,
            payload: state.valueToAdd + state.count
        })
        dispatch({
            type: VALUE_TO_ZERO,
            payload: state.valueToAdd = 0
        })

    }
    return (
        <Panel className="m-3">
            <h1 className="text-lg">count is {state.count}</h1>
            <div className="flex flex-row">
                <Button primary onClick={increment}>increment</Button>
                <Button primary onClick={decrement}>decrement</Button>
            </div>
            <form>
                <label>add a lot</label>
                <input
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-500"/>
                <Button primary rounded onClick={handleSubmit}>add it</Button>
            </form>
        </Panel>
    )
}
export default CounterPage
