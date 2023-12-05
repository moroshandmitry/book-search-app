import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { Header, Layout } from '../src/components/ui'

import { CorePage } from './pages'

import './global.scss'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Router>
    <Layout>
      <Header />
      <CorePage />
    </Layout>
  </Router>
)

reportWebVitals()
