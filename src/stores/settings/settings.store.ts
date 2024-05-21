import { create } from 'zustand'

export type StringDict = Record<string, string>

export type NestedDict = StringDict & {
  [key: string]: StringDict | NestedDict
}

export type SettingsState = {
  language: string
  dict: NestedDict
}

export type Actions = {
  setLanguage: (value: string) => void
  setDictionary: (value: NestedDict) => void
}

export type SettingsStore = SettingsState & Actions

export const useSettingsStore = create<SettingsStore>()((set) => ({
  language: '',
  dict: {},

  setLanguage: (value: string) => set(() => ({ language: value })),
  setDictionary: (value: NestedDict) => set(() => ({ dict: value })),
}))
