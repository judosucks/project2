import {useState} from "react"
function Accordion({items}) {

    const [expandedIndex,
        setExpandedIndex] = useState(0)

    const renderedItem = items.map((item, index) => {
        const isExpanded = index === expandedIndex //true

        const handleClick =(nextIndex)=>{
            setExpandedIndex(nextIndex)
            console.log('expanedIndex is',expandedIndex)
        }
        return (
            <div key={item.id}>
                <div onClick={()=>handleClick(index)}>{item.label}</div>
                {isExpanded && <div>{item.content}</div>} 
                
            </div>
            
        )
    })

    return (
        <div>{renderedItem}</div>
    )
}
export default Accordion