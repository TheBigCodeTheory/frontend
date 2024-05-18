import { useSettingsStore } from '@/stores'
import { useShallow } from 'zustand/react/shallow'

export const useSettingsFacade = () => {
  const { language, dict, setLanguage, setDictionary } = useSettingsStore(
    useShallow((state) => ({
      language: state.language,
      dict: state.dict,
      setLanguage: state.setLanguage,
      setDictionary: state.setDictionary,
    })),
  )
  return { language, dict, setLanguage, setDictionary }
}
