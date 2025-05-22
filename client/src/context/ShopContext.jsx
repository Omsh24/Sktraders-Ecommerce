import { createContext, useEffect, useState } from "react";
import {products} from "../assets/frontend_assets/assets"
import {useNavigate} from 'react-router-dom'

export const ShopContext = createContext();


const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId]){
                cartData[itemId] += 1;
            }
            else{
                cartData[itemId] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            try {
                if(cartItems[items] > 0){
                    totalCount += cartItems[items];
                }
            } catch (error) {
                
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items);
            try {
                if(cartItems[items] > 0){
                    totalAmount += itemInfo.price * cartItems[items];
                }
            } catch (error) {
                
            }
        }
        return totalAmount;
    }



    useEffect(()=>{
        console.log(cartItems)
    }, [cartItems])

    const value = {
        products,
        currency,
        delivery_fee,
        search, setSearch,
        showSearch ,setShowSearch,
        cartItems, addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;
