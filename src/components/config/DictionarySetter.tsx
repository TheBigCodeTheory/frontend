'use client'

import { useEffect } from 'react'
import { useSettingsStore } from '@/stores'

export const DictionarySetter = ({ dictionary }: { dictionary: any }) => {
  const setDictionary = useSettingsStore((state) => state.setDictionary)
  const state = useSettingsStore((state) => state)

  useEffect(() => {
    if (state.dict !== dictionary) {
      setDictionary(dictionary)
    }
  }, [])

  console.log(state, 'TEST LAYOUT')
  return null
}
