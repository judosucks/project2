import useNavigation from "../hooks/use-navigation"

function Route({path,children}){
    const {currentPath} = useNavigation()
    if(path === currentPath){
        return children
    }
    return console.log("null")
}
export default Route