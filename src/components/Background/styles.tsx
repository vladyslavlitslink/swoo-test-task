import styled from 'styled-components/native'

export const StyledBackground = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.main};
`

export const StyledSafeAreaBackground = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.main};
  justify-content: space-evenly;
  align-items: center;
`
