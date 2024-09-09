import { useState } from 'react'
import './App.css'
import Layout from './components/layouts/Layout'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/route'

function App({ children }) {
  const [count, setCount] = useState(0)

  return (
    <>
            <RouterProvider router={router} />

    </>
  )
}

export default App