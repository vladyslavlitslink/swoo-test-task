import { PropsWithChildren } from 'react'
import { TouchableOpacity } from 'react-native'
import {
  SpaceProps,
  ColorProps,
  BorderProps,
  BackgroundColorProps
} from 'styled-system'

export interface ButtonProps
  extends PropsWithChildren<TouchableOpacity>,
    SpaceProps,
    ColorProps,
    BorderProps,
    BackgroundColorProps {}
