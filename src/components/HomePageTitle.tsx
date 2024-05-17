'use client'

import { useSettingsStore } from '@/stores'

export const HomePageTitle = () => {
  const dict = useSettingsStore((state) => state.dict)

  return (
    <div>
      {dict.home && (
        <h1 className="text-3xl text-teal-500 font-extrabold font-mono">
          {dict.home.title}
        </h1>
      )}
    </div>
  )
}
