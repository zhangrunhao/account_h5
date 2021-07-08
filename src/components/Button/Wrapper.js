import styled from 'styled-components'
import {
  darken
} from 'polished'
import {
  buttonHeight,
  buttonFontSize,
  colorTextBase,
  radiusSM,
  radiusMD,
  fillBase,
  fillTap,
  buttonFontSizeSM,
  buttonHeightSM,
  hSpacingLG,
  colorTextBaseInverse,
  primaryButtonFill,
  primaryButtonFillTap,
  warningButtonFill,
  warningButtonFillTap
} from '../../style/Styles.js'

// base
const ButtonWrapper = styled.a`
  display: ${props => props.inline ? 'inline-block' : 'block'};
  outline: 0 none;
  box-sizing: border-box;
  padding: ${props => (props.size || props.inline) ? `0 ${hSpacingLG}` : '0'};
  text-align: center;
  text-align: center;
  border-radius: ${radiusSM};
  height: ${props => props.size === 'large' ? buttonHeight : buttonHeightSM};
  font-size: ${props => props.size === 'large' ? buttonFontSize : buttonFontSizeSM};
  line-height: ${props => props.size === 'large' ? buttonHeight : buttonHeightSM};

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: nowrap;

  border-radius: ${radiusMD};
`

// normal
export const NormalButtonWrapper = styled(ButtonWrapper)`
  color: ${colorTextBase};
  background-color: ${fillBase};
  &:active {
    color: ${darken(0.3, colorTextBase)};
    background-color: ${fillTap};
  }
`
export const DisabledNormalButtonWrapper = styled(NormalButtonWrapper)`
  color: ${darken(0.3, colorTextBase)};
  opacity: 0.6;
  background-color: ${fillBase};
  &:active {
    background-color: ${fillBase};
  }
`

// primary
export const PrimaryButtonWrapper = styled(ButtonWrapper)`
  color: ${colorTextBaseInverse};
  background-color: ${primaryButtonFill};
  &:active {
    color: ${darken(0.3, colorTextBaseInverse)};
    background-color: ${primaryButtonFillTap};
  }
`

export const DisabledPrimaryButtonWrapper = styled(PrimaryButtonWrapper)`
  color: ${darken(0.6, colorTextBaseInverse)};
  background-color: ${primaryButtonFill};
  opacity: 0.4;
  &:active {
    color: ${darken(0.6, colorTextBaseInverse)};
    background-color: ${primaryButtonFill};
  }
`

// warning
export const WarningButtonWrapper = styled(ButtonWrapper)`
  color: ${colorTextBaseInverse};
  background-color: ${warningButtonFill};
  &:active {
    color: ${darken(0.3, colorTextBaseInverse)};
    background-color: ${warningButtonFillTap};
  }
`

export const DisabledWarningButtonWrapper = styled(WarningButtonWrapper)`
  color: ${darken(0.6, colorTextBaseInverse)};
  opacity: 0.4;
  background-color: ${warningButtonFill};
  &:active {
    color: ${darken(0.6, colorTextBaseInverse)};
    background-color: ${warningButtonFill};
  }
`
