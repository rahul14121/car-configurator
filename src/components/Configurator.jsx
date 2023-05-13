import { useCustomization } from "../contexts/Customization"

const Configurator = () => {
    const {car, setCar} = useCustomization();
    console.log(car);
    return <div className="configurator">
        <div className="configurator_section">
            <div className="configurator_section_title">
                Car Options
            </div>
            <div className="configurator_section_values">
                <div className="item" onClick={() => setCar("car1")}>
                    <div className="item_option">
                        Car 1
                    </div>
                </div>
                <div className="item" onClick={() => setCar("car2")}>
                    <div className="item_option">
                        Car 2
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default Configurator