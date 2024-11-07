import { create } from 'zustand';

export type PackageManager = 'npm' | 'pnpm' | 'yarn';

interface LibraryStore {
  selectedPackageManager: PackageManager;
  selectedLibrary: string;
  setPackageManager: (manager: PackageManager) => void;
  setLibrary: (library: string) => void;
}

export const useLibraryStore = create<LibraryStore>((set) => ({
  selectedPackageManager: 'npm',
  selectedLibrary: 'React',
  setPackageManager: (manager) => set({ selectedPackageManager: manager }),
  setLibrary: (library) => set({ selectedLibrary: library }),
}));
