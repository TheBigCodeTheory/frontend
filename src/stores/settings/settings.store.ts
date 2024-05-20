import { create } from 'zustand'

export type SettingsState = {
  language: string
  dict: any
}

export type Actions = {
  setLanguage: (value: string) => void
  setDictionary: (value: any) => void
}

export type SettingsStore = SettingsState & Actions

export const useSettingsStore = create<SettingsStore>()((set) => ({
  language: '',
  dict: {},

  setLanguage: (value: string) => set(() => ({ language: value })),
  setDictionary: (value: any) => set(() => ({ dict: value })),
}))
