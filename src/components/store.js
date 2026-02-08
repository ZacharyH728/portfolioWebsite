import { create } from 'zustand'

const useActiveWindowStore = create((set) => ({
  activeWindow: null,
  setActiveWindow: (id) => set((state) => ({activeWindow: id})),
  
  projectsOpen: false,
  toggleProjects: () => set((state) => ({projectsOpen: !state.projectsOpen})),
  
  aboutMeOpen: true,
  toggleAboutMe: () => set((state) => ({aboutMeOpen: !state.aboutMeOpen})),
  
  contactMeOpen: false,
  toggleContactMe: () => set((state) => ({contactMeOpen: !state.contactMeOpen})),

  tutorialOpen: false,
  toggleTutorial: () => set((state) => ({tutorialOpen: !state.tutorialOpen})),
}));

export default useActiveWindowStore;
