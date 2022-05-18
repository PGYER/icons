// core
import React from 'react'
import PropTypes from 'prop-types'

// icon contaienrs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ColorIcon from './ColorIcon'

class PIcon extends React.Component {
  render () {
    const { icon, ...otherProps } = this.props
    if (icon.prefix === 'pgc') {
      return <ColorIcon icon={icon} {...otherProps} />
    } else {
      return <FontAwesomeIcon icon={icon} {...otherProps} />
    }
  }
}

PIcon.propTypes = {
  icon: PropTypes.object.isRequired
}

export default PIcon
