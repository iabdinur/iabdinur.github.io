import { create } from 'zustand'

interface UIState {
  isMenuOpen: boolean
  toggleMenu: () => void
  setMenuOpen: (open: boolean) => void
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
}

export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  theme: 'dark',
  setTheme: (theme) => set({ theme }),
}))

