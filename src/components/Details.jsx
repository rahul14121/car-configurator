import { colours, useCustomization } from "../contexts/Customization"

const Details = () => {
    const {carDetails, setCarDetails} = useCustomization();
   
    
    

    if (!carDetails){
        return <div className="noDetails"></div>
    }
    return <div className="details">
        <div className="details_section">
            <div className="details_section_title">
                Car Specifications
            </div>
            <div className="details_section_values">
                <div className={`item`}>
                    <div className="item_option">
                        Porsche - 2022 Model - £100000
                    </div>
                </div>
                <div className={`item`}>
                    <div className="item_option">
                        McLaren - 2023 Model - £150000
                    </div>
                </div>
            </div>
        </div>
       
        <div className="details_section">
            <div className="details_section_title">
                Speed
            </div>
            <div className="details_section_values">
                <div className={`item`}>
                    <div className="item_option">
                        Porsche - 0mph to 60mph in 3 seconds
                    </div>
                </div>
                <div className={`item`}>
                    <div className="item_option">
                        McLaren - 0mph to 60mph in 2.7 seconds
                    </div>
                </div>
            </div>
        </div>
        <div className="details_section">
            <div className="details_section_title">
                Accessories Included
            </div>
            <div className="details_section_values">
                <div className={`item`}>
                    <div className="item_option">
                        Porsche - Nothing Included
                    </div>
                </div>
                <div className={`item`}>
                    <div className="item_option">
                        McLaren - Premium Seats Included
                    </div>
                </div>
            </div>
        </div>
        <div className="details_section">
            <div className="details_section_title">
                Tyres
            </div>
            <div className="details_section_values">
                <div className={`item`}>
                    <div className="item_option">
                        Porsche - Standard Tyres
                    </div>
                </div>
                <div className={`item`}>
                    <div className="item_option">
                        McLaren - Racetrack tyres
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default Details