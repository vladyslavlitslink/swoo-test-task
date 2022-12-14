import React, { memo, PropsWithChildren } from 'react'

import { StyledBackground, StyledSafeAreaBackground } from './styles'

interface BackgroundProps {
  variant?: 'safe' | 'default'
}

export const Background = memo((props: PropsWithChildren<BackgroundProps>) => {
  const Component =
    props.variant === 'safe' ? StyledSafeAreaBackground : StyledBackground

  return <Component>{props.children}</Component>
})
