import { createContext, useContext, useState } from "react";
import menu from "../menu-data"

const MenuContext = createContext(null);

const MenuProvider = ({ children }) => {
  const [allMenu, setAllMenu] = useState(menu)

  return (
    <MenuContext.Provider value={menu}>
      {children}
    </MenuContext.Provider>
  );
}
export default MenuProvider;

export function useMenu(){
  return useContext(MenuContext);
}
