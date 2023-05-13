import { useCustomization } from "../contexts/Customization"

const Configurator = () => {
    const {car, setCar, accessory, setAccessory} = useCustomization();
    console.log(car);
    return <div className="configurator">
        <div className="configurator_section">
            <div className="configurator_section_title">
                Car Options
            </div>
            <div className="configurator_section_values">
                <div className={`item ${car === "car1" ? "item-active": ""}`} onClick={() => setCar("car1")}>
                    <div className="item_option">
                        Car 1
                    </div>
                </div>
                <div className={`item ${car === "car2" ? "item-active": ""}`} onClick={() => setCar("car2")}>
                    <div className="item_option">
                        Car 2
                    </div>
                </div>
            </div>
        </div>
        <div className="configurator_section">
            <div className="configurator_section_title">
                Accessories
            </div>
            <div className="configurator_section_values">
                <div className={`item ${accessory === 1 ? "item-active": ""}`} onClick={() => setAccessory(1)}>
                    <div className="item_option">
                        Calipers
                    </div>
                </div>
                <div className={`item ${accessory === 0 ? "item-active": ""}`} onClick={() => setAccessory(0)}>
                    <div className="item_option">
                        No Calipers
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default Configurator