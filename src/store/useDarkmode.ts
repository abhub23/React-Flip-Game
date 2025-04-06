import { create } from "zustand";

type Darkmodetype = {
  isDarkmode: "dark" | "light";
  toggleDarkmode: () => void;
};

export const useDarkmode = create<Darkmodetype>((set) => ({
  isDarkmode: (localStorage.getItem("theme") as "dark" | "light") || "dark",

  toggleDarkmode: () =>
    set((theme) => {
      const toggle = theme.isDarkmode == "dark" ? "light" : "dark";
      localStorage.setItem("theme", toggle);
      return { isDarkmode: toggle };
    }),
}));
