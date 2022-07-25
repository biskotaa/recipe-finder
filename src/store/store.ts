import create from 'zustand';

export const useStore = create<{
  searchTerm: string | undefined;
  aliveStatus: string | undefined;
  speciesStatus: string | undefined;
  genderStatus: string | undefined;
  setAlive: (payload: string) => void;
  setSpecies: (payload: string) => void;
  setGender: (payload: string) => void;
  setSearchTerm: (payload: string) => void;
  clearAllFilters: () => void;
}>((set) => ({
  searchTerm: undefined,
  aliveStatus: undefined,
  speciesStatus: undefined,
  genderStatus: undefined,
  setAlive: (payload) =>
    set((state) => ({
      ...state,
      aliveStatus: payload,
    })),
  setSpecies: (payload) =>
    set((state) => ({
      ...state,
      speciesStatus: payload,
    })),
  setGender: (payload) =>
    set((state) => ({
      ...state,
      genderStatus: payload,
    })),
  setSearchTerm: (payload) =>
    set((state) => ({
      ...state,
      searchTerm: payload,
    })),
  clearAllFilters: () =>
    set(() => ({
      searchTerm: undefined,
      aliveStatus: undefined,
      speciesStatus: undefined,
      genderStatus: undefined,
    })),
}));
