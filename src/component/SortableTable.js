import Table from "./Table";
import {GoArrowDown, GoArrowUp} from "react-icons/go";
import useSort from '../hooks/useSort'


function SortableTable(props) {

  
  const {config, data} = props
  const {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn
  } = useSort(data,config)
  

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column
    }
    return {
      ...column,
      header: () => (
        <th className="cursor-pointer hover:bg-gray-100" onClick={() =>setSortColumn(column.label)}>
          <div className="flex items-center">{getIcons(column.label, sortBy, sortOrder)} {column.label}
          </div>
        </th>
      )
    }
  })
  // only sort data if sortOrder && sortBY are not null make a copy of the 'data'
  // prop find the correct sortValue function and use it for sorting

  function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
      return <div>
        <GoArrowUp/><GoArrowDown/>
      </div>
    }
    if (sortOrder === null) {
      return <div>
        <GoArrowUp/><GoArrowDown/>
      </div>
    } else if (sortOrder === 'asc') {
      return <GoArrowUp/>
    } else if (sortOrder === 'desc') {
      return <GoArrowDown/>
    }
  }

  return <div>

    <Table {...props} data={sortedData} config={updatedConfig}/>
  </div>
}

export default SortableTable