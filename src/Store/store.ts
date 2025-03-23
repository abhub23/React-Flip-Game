import { create } from "zustand";

{/*Grid State */}
type Gridtype = {
    gridSize: number;
    setgridSize: (size: number) => void
}
export const useGridsize = create<Gridtype>((set) => ({
    gridSize: 4,
    setgridSize: (size: number) => set({gridSize: size})
}))

{/*Card State */}
type Card = {
        id: number;
        num: number;
      }

type Cardtype = {
    cards: Card[];
    setCards: (size: Card[]) => void;
}

export const useCards = create<Cardtype>((set) => ({
    cards: [],
    setCards: (newCards) => set({cards: newCards})
}))

{/*Cardflipped State */}
type Flippedtype = {
    flipped: number[];
    setFlipped: (newFlip: []) => unknown
}
export const useFlipped = create<Flippedtype>((set) => ({
    flipped: [],
    setFlipped: (newFlip) => set({flipped: newFlip})
}))

{/*Solved State */}
type Solvedtype = {
    solved: number[];
    setSolved: (solvedArr: []) => unknown;
}

export const useSolved = create<Solvedtype>((set) => ({
    solved: [],
    setSolved: (solvedArr) => set({solved: solvedArr})
}))

{/*Won State */}
type Wontype = {
    won: boolean;
    setWon: (status: boolean) => void;
}
export const useWon = create<Wontype>((set) => ({
    won: false,
    setWon: (status) => set({won: status})
}))

{/*Disabled State */}
type Disabledtype = {
    disabled: boolean;
    setDisabled: (state: boolean) => void;
}

export const useDisabled = create<Disabledtype>((set) => ({
    disabled: false,
    setDisabled: (state: boolean) => set({disabled: state})
}))