'use client'

import { useCounterStore } from '@/providers/counter-store-provider'
import { AuthAPI } from './../libs/api/auth'
export default function HomePage() {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state,
  )
  async function handleLogin() {
    const response = await AuthAPI.login('ezequiel.n.villa@gmail.com', '208679')
    console.log({ response })
  }
  return (
    <div>
      Count: {count}
      <hr />
      <button
        className="text-center text-blue-500 font-bold"
        type="button"
        onClick={() => void incrementCount()}
      >
        Increment Count
      </button>
      <button type="button" onClick={() => void decrementCount()}>
        Decrement Count
      </button>
      <div>
        <br />
        <button onClick={handleLogin}>login hardcoded</button>
      </div>
    </div>
  )
}
