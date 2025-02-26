import { create } from 'zustand'

const useActiveWindowStore = create((set) => ({
  activeWindow: null,
  setActiveWindow: (id) => set((state) => ({activeWindow: id}))
}));

export default useActiveWindowStore;