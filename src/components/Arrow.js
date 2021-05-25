import React from 'react'
import SvgButton from './SvgButton'
import PropTypes from 'prop-types'

import './components.css'

function Arrow({ className, onClick, inverted, label, disabled }) {
  const [isHovered, setIsHovered] = React.useState(false)

  const toggleHover = () => {
    setIsHovered(isHovered => !isHovered)
  }

  const labelStyles = !label
    ? {
        width: '16px',
        height: '12px',
        flex: '0 0 16px',
      }
    : {}

  const hoverStyle = isHovered
    ? {
        color: disabled ? '#fff' : '#dedede',
      }
    : {}

  return (
    <SvgButton
      style={{
        color: '#fff',
        opacity: disabled ? '0.3' : 1,
        ...labelStyles,
        ...hoverStyle,
      }}
      className={className}
      onClick={onClick}
      data-tour-elem={`${inverted ? 'right' : 'left'}-arrow`}
      disabled={disabled}
      onMouseEnter={() => toggleHover()}
      onMouseLeave={() => toggleHover()}
    >
      {label ? (
        <span className="Arrow__label">{label}</span>
      ) : (
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={
              inverted
                ? 'M0.535405 9.9768C0.266091 10.2871 0.266091 10.7907 0.535405 11.1009C0.805489 11.4104 1.24378 11.4104 1.51387 11.1009L5.46477 6.56172C5.73408 6.25142 5.73408 5.74793 5.46477 5.43763L1.51387 0.8984C1.24378 0.588988 0.805489 0.588988 0.535405 0.8984C0.266091 1.2087 0.266091 1.71225 0.535405 2.02255L3.99937 6.00137L0.535405 9.9768Z'
                : 'M5.46476 9.9768C5.73408 10.2871 5.73408 10.7907 5.46476 11.1009C5.19468 11.4104 4.75639 11.4104 4.4863 11.1009L0.5354 6.56172C0.266087 6.25142 0.266087 5.74793 0.5354 5.43763L4.4863 0.8984C4.75639 0.588988 5.19468 0.588988 5.46476 0.8984C5.73408 1.2087 5.73408 1.71225 5.46476 2.02255L2.0008 6.00137L5.46476 9.9768Z'
            }
            fill="white"
          />
        </svg>
      )}
    </SvgButton>
  )
}

Arrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  inverted: PropTypes.bool,
  label: PropTypes.node,
  disabled: PropTypes.bool,
}

export default Arrow
