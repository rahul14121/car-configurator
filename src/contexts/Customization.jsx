import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
    const [car, setCar] = useState("car1");
    const [accessory, setAccessory] = useState(0)
    return <CustomizationContext.Provider value={{car, setCar, accessory, setAccessory}}>
        {props.children}
    </CustomizationContext.Provider>
}

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
}