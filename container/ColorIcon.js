// core
import React from 'react'
import PropTypes from 'prop-types'

class ColorIcon extends React.Component {
  render () {
    const { icon, style, ...otherProps } = this.props
    return (
      <svg
        aria-hidden='true'
        focusable='false'
        data-prefix={icon.prefix}
        data-icon={icon.name}
        role='img'
        xmlns='http://www.w3.org/2000/svg'
        style={{
          ...style,
          overflow: 'visible',
          display: 'inline-block',
          fontSize: 'inherit',
          width: '1em',
          height: '1em',
          verticalAlign: '-0.125em'
        }}
        viewBox={[0, 0, icon.icon[0], icon.icon[1]].join(' ')}
        {...otherProps}
      >
        {icon.icon && icon.icon[2].map((item, key) => <path key={key} style={item[0]} d={item[1]} />)}
      </svg>)
  }
}

ColorIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  style: PropTypes.object
}

export default ColorIcon
