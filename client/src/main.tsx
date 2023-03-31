import { createRoot } from 'react-dom/client'
import { BrowserRouter as Route } from 'react-router-dom'
import App from './App'
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <ThirdwebProvider activeChain={ChainId.Goerli}>
    <Provider store={store}>
      <Route>
        <App />
      </Route>
    </Provider>
  </ThirdwebProvider>
)
