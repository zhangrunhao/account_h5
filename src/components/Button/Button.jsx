import React from 'react'
import {
  NormalButtonWrapper,
  PrimaryButtonWrapper,
  WarningButtonWrapper,
  DisabledNormalButtonWrapper,
  DisabledPrimaryButtonWrapper,
  DisabledWarningButtonWrapper
} from './Wrapper'
import PropTypes from 'prop-types'

const getCompWrapper = function (disabled, type) {
  if (disabled) {
    switch (type) {
      case 'normal': return DisabledNormalButtonWrapper
      case 'primary': return DisabledPrimaryButtonWrapper
      case 'warning': return DisabledWarningButtonWrapper
    }
  } else {
    switch (type) {
      case 'normal': return NormalButtonWrapper
      case 'primary': return PrimaryButtonWrapper
      case 'warning': return WarningButtonWrapper
    }
  }
}

export default class Button extends React.Component {
  render () {
    const {
      type,
      size,
      disabled,
      inline,
      onClick,
      children
    } = this.props
    const CompWrapper = getCompWrapper(disabled, type)
    return (
      <>
        <CompWrapper
          inline={inline}
          type={type}
          size={size}
          onClick={disabled ? undefined : onClick}
        >
          {children}
        </CompWrapper>
      </>
    )
  }
}

Button.defaultProps = {
  type: 'normal',
  size: 'large',
  disabled: false,
  inline: false,
  onClick: () => {
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['normal', 'primary', 'warning']),
  size: PropTypes.oneOf(['large', 'small']),
  disabled: PropTypes.bool, //  是否禁用
  inline: PropTypes.bool, // 是否行内
  onClick: PropTypes.func, // 点击回调事件
  children: PropTypes.oneOfType([ // 子元素
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}
