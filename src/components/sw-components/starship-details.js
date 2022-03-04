import React from "react";

import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import {withSwapiService} from "../hoc-helpers";

const StarshipDetails = (props) => {
        return (
            <ItemDetails {...props}>

                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />
            </ItemDetails>
        )
};

const mapMethodsProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default withSwapiService(mapMethodsProps)(StarshipDetails);