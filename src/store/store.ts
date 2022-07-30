import create from 'zustand';

export const useStore = create<{
  searchTerm: string | undefined;
  aliveStatus: string | undefined;
  speciesStatus: string | undefined;
  genderStatus: string | undefined;
  isFiltered: boolean;
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
  isFiltered: false,
  setAlive: (payload) =>
    set((state) => ({
      ...state,
      aliveStatus: payload,
      isFiltered: true,
    })),
  setSpecies: (payload) =>
    set((state) => ({
      ...state,
      speciesStatus: payload,
      isFiltered: true,
    })),
  setGender: (payload) =>
    set((state) => ({
      ...state,
      genderStatus: payload,
      isFiltered: true,
    })),
  setSearchTerm: (payload) =>
    set((state) => ({
      ...state,
      searchTerm: payload,
      isFiltered: true,
    })),
  clearAllFilters: () =>
    set(() => ({
      searchTerm: undefined,
      aliveStatus: undefined,
      speciesStatus: undefined,
      genderStatus: undefined,
      isFiltered: false,
    })),
}));
