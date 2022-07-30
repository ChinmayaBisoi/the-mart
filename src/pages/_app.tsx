import "../styles/globals.css";
import Head from "next/dist/shared/lib/head";
import { AppProps } from "next/app";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

export const ProductStateContext = createContext<any>(null);
export const ProductDispatchContext = createContext<any>(null);

const initialState: any = {
  //inital product list
  products: [
    {
      name: "Potato",
      id: 1,
      price: 30,
      available: 1,
      vendor: "Himachal Pvt Ltd",
      category: "Vegetables",
      count: 0,
      imgUrl: "/potato.jpeg",
    },
    {
      name: "Banana",
      id: 2,
      price: 50,
      available: 1,
      category: "Fruits",
      vendor: "Organic farms",
      count: 0,
      imgUrl: "/banana.jpeg",
    },
    {
      name: "Drumsticks",
      id: 3,
      price: 20,
      available: 0,
      category: "Vegetables",
      vendor: "Mallikarjuna farms",
      count: 0,
      imgUrl: "/drumstick.jpeg",
    },
    {
      name: "Orange",
      id: 4,
      price: 25,
      available: 1,
      vendor: "Nagpur farms",
      category: "Fruits",
      count: 0,
      imgUrl: "/orange.jpeg",
    },
  ],

  //to select category
  selectedCategory: "All Products",
};

const productStateReducer = (state: any, action: any) => {
  switch (action.type) {
    case "initialize":
      return state;
    case "service-conf-modal-status":
      return {
        ...state,
        serviceConfModalStatus: action.status,
      };
    case "add-or-remove-item":
      return {
        ...state,
        products: action.products,
        // canSaveChanges: true,
      };
    case "change-category":
      return {
        ...state,
        selectedCategory: action.selectedCategory,
        // canSaveChanges: true,
      };
    default:
      return state;
  }
};

export function ProductStateProvider({ children }: { children: any }) {
  const [state, dispatch] = useReducer(productStateReducer, initialState);

  const value: any = useMemo(() => ({ ...state }), [state]);

  return (
    <ProductStateContext.Provider value={value}>
      <ProductDispatchContext.Provider value={dispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
}

export function useProductState(): any {
  const context = useContext(ProductStateContext);
  if (context === undefined) {
    throw new Error(
      "useScheduleServicesState must be used within a ScheduleServicesStateProvider"
    );
  }
  return context;
}

export function useProductDispatch(): any {
  const context = useContext(ProductDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useScheduleServicesDispatch must be used within a ScheduleServicesStateProvider"
    );
  }
  return context;
}

function MyApp({ Component, pageProps }: AppProps) {
  // function modifyCount(id, price, value) {
  //   let newVal = 0;
  //   if (price + value < 0) {
  //     newVal = price;
  //   } else {
  //     newVal = price + value;
  //   }
  //   let temp = data.map((item) => {
  //     if (item.id == id) item.count = newVal;
  //     return item;
  //   });
  //   setData(temp);
  // }

  // useEffect(() => {
  //   let k: any = localStorage.getItem("mall-products");
  //   const items = JSON.parse(k);
  //   if (items) {
  //     setData(items);
  //   } else {
  //     const temp = products.map((item) => {
  //       return { ...item, count: 0 };
  //     });

  //     setData(temp);
  //     localStorage.setItem("mall-products", JSON.stringify(temp));
  //   }
  // }, []);

  return (
    <ProductStateProvider>
      <Component {...pageProps}>
        <Head>
          <title>C.bi Projects</title>
          <link rel="icon" href="/snowflake-solid.svg" />
        </Head>
      </Component>
    </ProductStateProvider>
  );
}

export default MyApp;
