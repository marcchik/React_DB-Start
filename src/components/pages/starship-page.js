import Rect, { Component } from "react";
import Row from "../row";
import {StarshipDetails, StarshipList} from "../sw-components";
import React from "react";

export default class StarshipPage extends Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {
        const { selectedItem } = this.state;

        return (
            <Row
                left={<StarshipList onItemSelected={this.onItemSelected}/>}
                right={<StarshipDetails itemId={selectedItem} />}
            />
        )
    }
}