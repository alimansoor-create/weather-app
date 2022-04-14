import { writable } from "svelte/store";

export const unit = (() => {
  const { subscribe, update } = writable<"C" | "F">("C");

  const toggle = () => {
    update((value) => {
      switch (value) {
        case "C":
          return "F";
        case "F":
          return "C";
        default:
          throw new Error("Invalid value stored in unit");
      }
    });
  };

  return { subscribe, toggle };
})();