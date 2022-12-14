import styled from 'styled-components/native'
import { space, color, border, background } from 'styled-system'

import { ButtonProps } from './types'

export const StyledButton = styled.TouchableOpacity<ButtonProps>`
  ${space}
  ${color}
  ${border}
  ${background}
`
