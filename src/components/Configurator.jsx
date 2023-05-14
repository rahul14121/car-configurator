import { Button } from "@mui/material";
import { colours, useCustomization } from "../contexts/Customization";
import { Print } from "@mui/icons-material";
const Configurator = () => {
  const {
    car,
    setCar,
    accessory,
    setAccessory,
    carColour,
    setCarColour,
    carDetails,
    setCarDetails,
  } = useCustomization();
  /* This code is calculating the total cost of the car based on the selected options in the
  configurator. */
  var cost = 0;
  if (car === "car1") {
    cost = 100000;
  } else {
    cost = 150000;
  }
  if (accessory === 1) {
    cost += 1000;
  } else {
    cost += 0;
  }

  
  return (
    <div className="configurator">
      <div className="configurator_section">
        <div className="configurator_section_title">Car Options</div>
        <div className="configurator_section_values">
          {/* This code is rendering two options for the user to select a car model. The `className`
          attribute is dynamically setting the class of the `div` element based on whether the `car`
          state variable matches the corresponding car model (`car1` or `car2`). If the `car` state
          variable matches the current car model, the `item-active` class is added to the `div`
          element, which highlights the selected option. The `onClick` attribute is setting the
          `car` state variable to the corresponding car model (`car1` or `car2`) when the user
          clicks on the option. The `div` element also displays the name of the car model and its
          price. */}
          <div
            className={`item ${car === "car1" ? "item-active" : ""}`}
            onClick={() => setCar("car1")}
          >
            <div className="item_option">Porsche - £100000</div>
          </div>
          <div
            className={`item ${car === "car2" ? "item-active" : ""}`}
            onClick={() => setCar("car2")}
          >
            <div className="item_option">McLaren - £150000</div>
          </div>
          {/* This code is rendering a button that toggles the visibility of the car specifications.
          When the button is clicked, it calls the `setCarDetails` function with a callback that
          toggles the value of the `carDetails` state variable. The text inside the button changes based on the value
          of the `carDetails` state variable - if it is true, the button text will say "Hide Car
        Specifications", and if it is false, the button text will say "Show Car Specifications". */}
          <Button
            onClick={() => {
              setCarDetails((carDetails) => !carDetails);
            }}
            variant="contained"
            endIcon={<Print />}
          >
            {carDetails ? "Hide Car Specifications" : "Show Car Specifications"}
          </Button>
        </div>
      </div>
      <div className="configurator_section">
        <div className="configurator_section_title">Car Colour</div>
        <div className="configurator_section_values">
          {/* This code is rendering a list of color options for the user to select for the car. It is
          using the `map` function to iterate over the `colours` array and render a `div` element
          for each color option. The `key` attribute is set to the `index` of the current item in
          the array. The `className` attribute is dynamically setting the class of the `div` element
          based on whether the `colour` property of the current item matches the `colour` property
          of the `carColour` state variable. If the `colour` properties match, the `item-active`
          class is added to the `div` element, which highlights the selected option. The `onClick`
          attribute is setting the `carColour` state variable to the current item when the user
          clicks on the option. The `div` element also displays a color preview and the name of the
        color option. */}
          {colours.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.colour === carColour.colour ? "item-active" : ""
              }`}
              onClick={() => setCarColour(item)}
            >
              <div
                className="item_colour_preview"
                style={{
                  backgroundColor: item.colour,
                }}
              />
              <div className="item_option">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator_section">
        <div className="configurator_section_title">Accessories</div>
       {/* This code is rendering a section in the configurator for the user to select an accessory
       option for the car. It is using two `div` elements to display two options - one for adding
       calipers to the car for £1000, and one for not adding calipers. The `className` attribute is
       dynamically setting the class of the `div` element based on whether the `accessory` state
       variable matches the corresponding accessory option (`1` or `0`). If the `accessory` state
       variable matches the current accessory option, the `item-active` class is added to the `div`
       element, which highlights the selected option. The `onClick` attribute is setting the
       `accessory` state variable to the corresponding accessory option (`1` or `0`) when the user
       clicks on the option. The `div` element also displays the name of the accessory option and
            its price. */}
        <div className="configurator_section_values">
          <div
            className={`item ${accessory === 1 ? "item-active" : ""}`}
            onClick={() => setAccessory(1)}
          >
            <div className="item_option">Calipers - £1000</div>
          </div>
          <div
            className={`item ${accessory === 0 ? "item-active" : ""}`}
            onClick={() => setAccessory(0)}
          >
            <div className="item_option">No Calipers</div>
          </div>
        </div>
      </div>
      <div className="configurator_section">
        <div className="configurator_section_title">Total Cost</div>
        <div className="configurator_section_values">
          <div className={"item"}>
            <div className="item_option">£{cost}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
