import { types, Instance } from "mobx-state-tree"
import React, { createContext } from "react"
import { ThemeStore, ThemeStoreInitialState } from "../theme-store/theme-store"

/**
 * Model description here for TypeScript hints.
 */
export const rootStore = types
  .model("RootStore", {
    themeStore: ThemeStore,
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .create({
    themeStore: ThemeStoreInitialState,
  })

const RootStoreContext = createContext<null | Instance<typeof rootStore>>(null)
export const StoreProvider = RootStoreContext.Provider

export const useStore = () => {
  const store = React.useContext(RootStoreContext)
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider")
  }
  return store
}
