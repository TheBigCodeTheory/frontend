'use client'

import { useCounterStore } from '@/providers/counter-store-provider'

export default function HomePage() {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state,
  )

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
    </div>
  )
}
