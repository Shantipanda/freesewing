import React from 'react'
import DesignPoint from '../DesignPoint'
import Text from '../Text'
import Circle from '../Circle'

const Point = (props) => {
  const output = []
  if (props.design)
    output.push(<DesignPoint {...props} key={'dp-' + props.name} className="design point" />)
  if (props.point.attributes.get('data-text'))
    output.push(<Text {...props} key={'point-' + props.name} />)
  if (props.point.attributes.get('data-circle'))
    output.push(<Circle point={props.point} key={'circle-' + props.name} />)

  return output.length < 1 ? null : output
}

export default Point
