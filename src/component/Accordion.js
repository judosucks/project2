import classNames from "classnames";
import {useState} from "react"
import {GoTriangleLeft, GoTriangleDown, GoArrowLeft} from "react-icons/go";
function Accordion({items,...rest}) {
  
  const [expandedIndex,
    setExpandedIndex] = useState(-1)
  
  const renderedItem = items.map((item, index) => {
    const isExpanded = index === expandedIndex //true

    const icon = <span className="text-xl">{isExpanded
        ? <GoTriangleDown/>
        : <GoArrowLeft/>}</span>
    const handleClick = (nextIndex) => {
        //pro
        setExpandedIndex((currentExpandedIndex)=>{
            if(currentExpandedIndex === nextIndex){
                return -1
            }else{
                return nextIndex
            }
        })
      
    //     if (expandedIndex === nextIndex) {
    //     setExpandedIndex(-1)
    //   } else {
    //     setExpandedIndex(nextIndex)
    //   }

    }
    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-1 bg-gray-50 border-b cursor-pointer"
          onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="text-center border-b p-5">{item.content}</div>}

      </div>

    )
  })

  return (
    <div className="border-x border-t rounded">{renderedItem}</div>
  )
}
export default Accordion