import { useContext } from "react";
import ComponentProvider from '../provider/component-provider'

function useComponentContext(){
    return useContext(ComponentProvider)
}
export default useComponentContext