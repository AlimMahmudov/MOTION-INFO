import {create} from "zustand";

interface SearchStore {
  searchQuery: string;
  selectedCategory: string;
  setSearchQuery: (query: string) => void;
  setCategory: (category: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: "",
  selectedCategory: "all",
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCategory: (category) => set({ selectedCategory: category }),
}));
