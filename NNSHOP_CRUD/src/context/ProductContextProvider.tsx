import { createContext, useReducer  } from "react";
import { IProduct } from "../interfaces/IProduct";

const initialState = {
    value: [] as IProduct[],
    proID: {} as IProduct
};


export const ProductContext = createContext({} as any);

const reducer = (state: { value: IProduct[]}, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                value: action.payload,
            };
            case "GET_PROID":
            return {
                ...state,
                proID: action.payload,
            };
                case "ADD_PRODUCTS":
            return {
                ...state,
                value: [...state.value,  action.payload],
            };
                case "EDIT_PRODUCT":
            return {
                ...state,
                value: [state.value.map((item)=> (item.id === action.payload ? state.value : action.payload))],
            };
        case "DELETE_PRODUCT":
            return {
               value: state.value.filter((item) => item.id !== action.payload),
            };
        default:
            return state;
    }
};

const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <ProductContext.Provider value={{ products, dispatch }}>
                {children}
            </ProductContext.Provider>
        </div>
    );
};

export default ProductContextProvider;