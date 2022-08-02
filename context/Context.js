import {createContext} from 'react';
 
const CartContext=createContext();

export const CartContextProvider = ({childern}) => {
  return
    <CartContext.Provider value={{Name:"viju"}}>{childern}
      </CartContext.Provider>
      }
      export default CartContext;