"use client";

// Import dependencies
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";

// Define the shape of the cart item
interface ICartItem {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
  quantity: number;
}

// Define the initial state of the cart
interface ICartState {
  cart: ICartItem[];
}

// Define actions to manipulate the cart
type CartAction =
  | { type: "ADD_TO_CART"; payload: ICartItem }
  | { type: "INCREMENT_QUANTITY"; payload: number }
  | { type: "DECREMENT_QUANTITY"; payload: number }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "CLEAR_CART" };

// Create the cart context
const CartContext = createContext<
  | {
      state: ICartState;
      dispatch: React.Dispatch<CartAction>;
    }
  | undefined
>(undefined);

// Define the cart reducer
const cartReducer = (state: ICartState, action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the item already exists in the cart
      const existingCartItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingCartItem) {
        // If it exists, increment the quantity of the existing item in the cart by 1
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      // If it doesn't exist, add the new item to the cart
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "INCREMENT_QUANTITY":
      // Increment the quantity of the item in the cart by 1
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREMENT_QUANTITY":
      // Decrement the quantity of the item in the cart by 1
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case "REMOVE_FROM_CART":
      //  Remove the item from the cart
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      // Clear the entire cart by setting it to an empty array
      const newState = { ...state, cart: [] };

      // Save the new state to local storage
      localStorage.setItem("cartState", JSON.stringify(newState));
      return newState;

    default:
      // Return the current state if no matching action is found
      return state;
  }
};

// Create a CartProvider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Initialize the cart state using the cartReducer and an initial empty cart array
  const [state, dispatch] = useReducer(cartReducer, {
    cart: loadCartStateFromLocalStorage(),
  });

  // Function to load cart state from local storage
  function loadCartStateFromLocalStorage(): ICartItem[] {
    // Get the cart state from local storage
    const storedState = localStorage.getItem("cartState");

    // If it exists, parse and return it as the initial cart state
    return storedState ? JSON.parse(storedState).cart : [];
  }

  // Use useEffect to save the cart state to local storage whenever it changes
  useEffect(() => {
    // Save the cart state to local storage
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  return (
    // Send the state and dispatch values to the context provider as the value prop to make them available to all child components
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to consume the cart context
export const useCart = () => {
  // Retrieve the cart context and ensure it exists
  const context = useContext(CartContext);

  if (!context) {
    // Throw an error if useCart is used outside of a CartProvider
    throw new Error("useCart must be used within a CartProvider");
  }

  // Return the cart context, including the state and dispatch function
  return context;
};
