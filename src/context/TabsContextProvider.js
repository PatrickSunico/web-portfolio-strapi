import React from "react"
export const TabsContext = createContext()

// Initial State
const TabsContext = createContext({
  selectedTabIndex: 0,
  selectedTab: () => {},
  headers: [],
  selectedDetails: "",
})
