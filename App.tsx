import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { theme } from 'src/styles/theme'
import { store } from 'src/redux/store'
import { Counter } from 'screens'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Counter />
      </ThemeProvider>
    </Provider>
  )
}

export default App
