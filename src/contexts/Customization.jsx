import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const colours = [
    {
      colour: "#683434",
      name: "red",
    },
    {
      colour: "#1a5e1a",
      name: "green",
    },
    {
      colour: "#659994",
      name: "blue",
    },
    {
      colour: "#896599",
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
    return <CustomizationContext.Provider value={{car, setCar, accessory, setAccessory, carColour, setCarColour}}>
        {props.children}
    </CustomizationContext.Provider>
}

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
}