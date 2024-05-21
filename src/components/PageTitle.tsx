'use client'

import { useSettingsFacade } from '@/hooks/facade/useSettingsFacade'

export const PageTitle = ({ children }: { children: React.ReactNode }) => {
  const { dict } = useSettingsFacade()

  return (
    <>
      {dict.home && (
        <div>
          <h1 className="text-9xl text-darkPurple font-display">
            {dict.home.title} {children}
          </h1>
          <h2></h2>
          <p className="text-orange font-sans">TestParagraph</p>
          <p className="text-orange font-sans font-bold">TestParagraphBold</p>
        </div>
      )}
    </>
  )
}
