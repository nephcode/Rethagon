import { useState } from 'react'
import reactLogo from './assets/stack/react.svg'
import viteLogo from '/vite.svg'
import bunLogo from './assets/stack/bun.svg'
import rethagonLogo from '/rethagon-logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <a href="#" target="_blank">
          <img src={rethagonLogo} className="hero" alt="Rethagon logo" />
        </a>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://bun.sh" target="_blank">
          <img src={bunLogo} className="logo bun" alt="Bun logo" />
        </a>
      </div>
      <h1>Vite + React + Bun</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Rethagon - Forecast Game Battle Rap 
        </p>
      </div>
      <p className="read-the-docs">
        Bun + Vite + React 19rc + Typescript + Foundry + Solidity + TailwindCSS
      </p>
    </>
  )
}

export default App
