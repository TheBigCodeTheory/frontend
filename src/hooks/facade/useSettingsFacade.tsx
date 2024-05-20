import { useSettingsStore } from '@/stores'
import { useShallow } from 'zustand/react/shallow'

export const useSettingsFacade = () => {
  return useSettingsStore(
    useShallow((state) => ({
      language: state.language,
      dict: state.dict,
      setLanguage: state.setLanguage,
      setDictionary: state.setDictionary,
    })),
  )
}
