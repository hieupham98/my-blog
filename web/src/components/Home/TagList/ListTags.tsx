import { FunctionComponent } from 'react'
import Item from './Item'

const ListTags: FunctionComponent = () => {
  return (
    <>
      <Item active={true} tag={{label: "Technology"}}/>
      <Item tag={{label: "Achitecture"}}/>
      <Item tag={{label: "History"}}/>
      <Item tag={{label: "Profile"}}/>
    </>
  
  )
}

export default ListTags
