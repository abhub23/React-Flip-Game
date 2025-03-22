import { create } from "zustand";

type Gridtype = {
    gridsize: number;
    setGridsize: (size: number)
}
export const useGridsize = create<Gridtype>((set) => ({
    gridsize: 2,
    setgridSize: (size) => set({gridzize: size})
}))









type Wontype = {
    won: boolean;
}
export const useWon = create<Wontype>((set) => ({
    won: false,
}))