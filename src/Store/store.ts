import { create } from "zustand";

type Grid = {
    gridsize: number;
}
export const useGridsize = create<Grid>((set) => ({
    gridsize: 2,
}))









type Won = {
    won: boolean;
}
export const useWon = create<Won>((set) => ({
    won: false,
}))