import { createRoot } from 'react-dom/client'
import { BrowserRouter as Route } from 'react-router-dom'
import App from './App'
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <ThirdwebProvider activeChain={ChainId.Goerli}>
    <Route>
      <App />
    </Route>
  </ThirdwebProvider>
)
