import { Button } from "@mui/material";
import { colours, useCustomization } from "../contexts/Customization"
import { Print } from "@mui/icons-material";
const Configurator = () => {
    const {car, setCar, accessory, setAccessory, carColour, setCarColour, carDetails, setCarDetails} = useCustomization();
    var cost = 0
    console.log(car == "car1")
    if (car === "car1") {
        cost = 100000
    }
    else{
        cost = 150000
    }
    if (accessory === 1){
        cost += 1000
    }
    else{
        cost += 0
    }
    
    console.log(carColour);
    return <div className="configurator">
        <div className="configurator_section">
            
            <div className="configurator_section_title">
                Car Options
            </div>
            <div className="configurator_section_values">
                <div className={`item ${car === "car1" ? "item-active": ""}`} onClick={() => setCar("car1")}>
                    <div className="item_option">
                        Porsche - £100000
                    </div>
                </div>
                <div className={`item ${car === "car2" ? "item-active": ""}`} onClick={() => setCar("car2")}>
                    <div className="item_option">
                        McLaren - £150000
                    </div>
                </div>
                <Button onClick={() => {setCarDetails(carDetails => !carDetails);}} variant="contained" endIcon={<Print/>}>
                {carDetails ? 'Hide Car Specifications' : 'Show Car Specifications'}
                </Button>
            </div>
        </div>
        <div className="configurator_section">
            <div className="configurator_section_title">
                Car Colour
            </div>
            <div className="configurator_section_values">
                {colours.map((item, index) => (
                    <div key={index} className={`item ${item.colour === carColour.colour ? "item-active": ""}`} onClick={() => setCarColour(item)}>
                    <div className="item_colour_preview" style={{
                        backgroundColor: item.colour
                    }} />
                    <div className="item_option">
                        {item.name}
                    </div>
                </div>

                ))
                } 
            </div>
        </div>
        <div className="configurator_section">
            <div className="configurator_section_title">
                Accessories
            </div>
            <div className="configurator_section_values">
                <div className={`item ${accessory === 1 ? "item-active": ""}`} onClick={() => setAccessory(1)}>
                    <div className="item_option">
                        Calipers - £1000
                    </div>
                </div>
                <div className={`item ${accessory === 0 ? "item-active": ""}`} onClick={() => setAccessory(0)}>
                    <div className="item_option">
                        No Calipers
                    </div>
                </div>
            </div>
        </div>
        <div className="configurator_section">
            <div className="configurator_section_title">
                Total Cost
            </div>
            <div className="configurator_section_values">
                
                <div className={"item"}>
                    <div className="item_option">
                        £{cost}
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default Configurator