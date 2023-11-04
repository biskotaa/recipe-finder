import create from 'zustand';

export const useStore = create<{
  searchTerm: string | undefined;
  isFiltered: boolean;
  setSearchTerm: (payload: string) => void;
}>((set) => ({
  searchTerm: undefined,
  isFiltered: false,
 
  setSearchTerm: (payload) =>
    set((state) => ({
      ...state,
      searchTerm: payload,
      isFiltered: true,
    })),
}));
