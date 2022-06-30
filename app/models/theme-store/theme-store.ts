import { types } from "mobx-state-tree"

// eslint-disable-line @typescript-eslint/no-unused-vars

export const ThemeStore = types
  .model("ThemeStore", {
    theme: types.string,
  })
  .actions((self) => ({
    changeTheme() {
      self.theme = self.theme === "dark" ? "light" : "dark"
    },
  }))

export const ThemeStoreInitialState = {
  theme: "light",
}
