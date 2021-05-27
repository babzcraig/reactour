import React from 'react'
import SvgButton from './SvgButton'
import PropTypes from 'prop-types'

import './components.css'
function Close({ className, color, onClick, ariaLabel }) {
  return (
    <SvgButton
      style={{
        position: 'absolute',
        top: '24px',
        right: '16px',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: color,
      }}
      className={'Close ' + className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.83283 0.167164C8.05572 0.39005 8.05572 0.752213 7.83283 0.975099L4.80801 4L7.83283 7.0249C8.05572 7.24779 8.05572 7.60995 7.83283 7.83284C7.7214 7.94427 7.57572 8 7.42927 8C7.28281 8 7.13705 7.94427 7.02492 7.83284L4 4.808L0.975081 7.83284C0.863641 7.94427 0.717915 8 0.571466 8C0.425009 8 0.279303 7.94427 0.167167 7.83284C-0.0557223 7.60995 -0.0557223 7.24779 0.167167 7.0249L3.19199 4L0.167167 0.975099C-0.0557223 0.752213 -0.0557223 0.39005 0.167167 0.167164C0.390048 -0.0557214 0.752192 -0.0557214 0.975081 0.167164L4 3.19201L7.02492 0.167164C7.24781 -0.0557214 7.60995 -0.0557214 7.83283 0.167164Z"
          fill="currentColor"
        />
      </svg>
    </SvgButton>
  )
}

Close.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  color: PropTypes.string,
}

Close.defaultProps = {
  color: 'white',
}

export default Close
