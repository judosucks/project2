import Button from "../component/Button";
import {useReducer} from "react";
import Panel from "../component/Panel";

const reducer = (state,action)=>{
    if(action.type === 'increment'){
        return{
            ...state,
            count:state.count +1,
           
          }
    }
    if(action.type === "value-to-add"){
        return{
            ...state,
            valueToAdd:action.payload
        }
    }
    if(action.type ==="decrement"){
        return{
            ...state,
            count:state.count-1
        }
    }
    if(action.type === "value-added"){
        return{
            ...state,
            count:action.payload
        }
    }
    if(action.type === 'valueAddToZero'){
        return{
            ...state,
            valueToAdd:action.payload
        }
    }
    return state
    
}

function CounterPage({initialCount}) {

    const [state,dispatch] = useReducer(reducer,{
        count:initialCount,
        valueToAdd:0
    })
    
    const increment = () => {
       dispatch({
        type:"increment",
        payload:state.count
       })
    }
    const decrement = () => {
       dispatch({
        type:"decrement",
        payload:state.count
       })
    }
    

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0
        dispatch({
            type:"value-to-add",
            payload:value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(state)
        dispatch({
            type:'value-added',
            payload:state.valueToAdd+state.count,
            
        })
        dispatch({
            type:'valueAddToZero',
            payload:state.valueToAdd = 0
        })
    
        
    }
    return (
        <Panel className="m-3">
            <h1 className="text-lg">count is {state.count}</h1>
            <div className="flex flex-row">
                <Button primary onClick={increment}>increment</Button>
                <Button primary onClick={decrement}>decrement</Button>
            </div>
            <form onClick={handleSubmit}>
                <label>add a lot</label>
                <input
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-500"/>
                <Button primary rounded>add it</Button>
            </form>
        </Panel>
    )
}
export default CounterPage
