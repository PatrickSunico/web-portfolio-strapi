// import React from "react"
// export const ScrollContext = createContext()

// // Initial State
// const initialState = [
//   {
//     scrollY: 0,
//   },
// ]
// // Reducer
// const scrollReducer = (state, action) => {
//   switch (action.type) {
//     case "SCROLLING":
//       return [...state]
//     default:
//       return initialState
//   }
// }

// const ScrollContextProvider = () => {
//   return <div></div>
// }

// export default ScrollContextProvider

import React from "react"
export const TabsContext = createContext()

// Initial State

const TabsContext = createContext({
  selectedTabIndex: 0,
  selectedTab: () => {},
  headers: [],
  selectedDetails: "",
})
