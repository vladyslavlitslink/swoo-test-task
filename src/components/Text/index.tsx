import React, { memo } from 'react'
import { TextProps } from './types'
import { StyledText } from './styles'

export const Text = memo((props: React.PropsWithChildren<TextProps>) => {
  return <StyledText {...props}>{props.children}</StyledText>
})
