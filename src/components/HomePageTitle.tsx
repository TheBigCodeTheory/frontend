'use client'

import { AuthAPI } from '@/libs/api/auth'
import { useSettingsFacade } from '@/hooks/facade/useSettingsFacade'

export const HomePageTitle = () => {
  const { dict } = useSettingsFacade()
  async function handleLogin() {
    const response = await AuthAPI.login('ezequiel.n.villa@gmail.com', '208679')
    console.log({ response })
  }

  return (
    <div>
      {dict.home && (
        <h1 className="text-3xl text-teal-500 font-extrabold font-mono">
          {dict.home.title}
        </h1>
      )}
      <br />
      <button onClick={() => handleLogin}>login hardcoded</button>
    </div>
  )
}
