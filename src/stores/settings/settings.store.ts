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

  setLanguage: (value: string) => set((state) => ({ language: value })),
  setDictionary: (value: any) => set((state) => ({ dict: value })),
}))
