import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const colours = [
    {
      colour: "#FF0000",
      name: "red",
    },
    {
      colour: "#1a5e1a",
      name: "green",
    },
    {
      colour: "#0000FF",
      name: "blue",
    },
    {
      colour: "#A020F0",
      name: "purple",
    },
    {
      colour: "#ffa500",
      name: "orange",
    },
    {
      colour: "#59555b",
      name: "grey",
    },
    {
      colour: "#222222",
      name: "black",
    },
    {
      colour: "#ececec",
      name: "white",
    },
  ];

export const CustomizationProvider = (props) => {
    const [car, setCar] = useState("car1");
    const [accessory, setAccessory] = useState(0)
    const [carColour, setCarColour] = useState(colours[2])
    const [carDetails, setCarDetails] = useState(false)
    return <CustomizationContext.Provider value={{car, setCar, accessory, setAccessory, carColour, setCarColour, carDetails, setCarDetails}}>
        {props.children}
    </CustomizationContext.Provider>
}

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
}