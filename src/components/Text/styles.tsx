import styled from 'styled-components/native'
import { variant } from 'styled-system'

export const StyledText = styled.Text`
  font-weight: 700;
  ${variant({
    variants: {
      h1: { color: 'green', fontSize: 62 },
      p1: { color: 'black', fontSize: 24 }
    }
  })}
`
