import { useState } from 'react'
import './App.css'
import Layout from './components/layouts/Layout'

function App({ children }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        {children}
      </Layout>
    </>
  )
}

export default App
