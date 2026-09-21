import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
  theme: "light",
};
function themeReducer(state, action) {
    switch (action.type) {
      case "ToggleTheme":
        return {
          ...state,
          theme: state.theme === "light" ? "dark" : "light",
        };
      default:
        return state;
    }
  }

export default function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
