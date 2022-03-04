import Rect, { Component } from "react";
import Row from "../row";
import {PlanetDetails, PlanetList} from "../sw-components";
import React from "react";

export default class PlanetPage extends Component {

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
                left={<PlanetList onItemSelected={this.onItemSelected}/>}
                right={<PlanetDetails itemId={selectedItem} />}
            />
        )
    }
}