import { ReactNode, createContext, useContext } from "react";

type ShoppingContextProviderProps = {
  childrend: ReactNode;
};

type CartItem = {
  id: number;
  title: string;
  thumbnailUrl: string;
};

interface ShoppingContextType {
  cartQty: number;
  totalPrice: number;
  cartItems: CartItem[];
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  addCartItem: (item: ProductItem) => void;
  clearCart: () => void;
}

const ShoppingContext = createContext({});

export const useShoppingContext = () => {
  return useContext(ShoppingContext);
};

export const ShoppingContextProvider = ({
  children,
}: ShoppingContextProviderProps) => {
  return (
    <ShoppingContext.Provider value={{}}>{Children}</ShoppingContext.Provider>
  );
};
export default ShoppingContext;
