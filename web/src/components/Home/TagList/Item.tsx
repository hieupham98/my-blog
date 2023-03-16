import { FunctionComponent } from 'react'

type Item = {
  active?: boolean,
  tag: {
    label: string,
  }
}

const Item: FunctionComponent<Item> = ({ active = false, tag }) => {
  return (
    <div className="col-6 card-sidebar-tags">
      <div className={`row sidebar-tags ${active ? 'active' : null}`}>
        <span style={{alignItems: 'center',}}> 
          {tag.label}
        </span>
      </div>
    </div>
  )
}

export default Item
