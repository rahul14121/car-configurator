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
  const [accessory, setAccessory] = useState(0);
  const [carColour, setCarColour] = useState(colours[2]);
  const [carDetails, setCarDetails] = useState(false);
  return (
    /* This code is creating a context provider component called `CustomizationProvider` that wraps
    around its children components. The provider component is passing down a set of values as a
    context to its children components. These values include `car`, `setCar`, `accessory`,
    `setAccessory`, `carColour`, `setCarColour`, `carDetails`, and `setCarDetails`. These values can
    be accessed by any of the children components that are wrapped by the `CustomizationProvider`
    component using the `useCustomization` hook. */
    <CustomizationContext.Provider
      value={{
        car,
        setCar,
        accessory,
        setAccessory,
        carColour,
        setCarColour,
        carDetails,
        setCarDetails,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
