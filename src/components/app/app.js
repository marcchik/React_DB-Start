import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

import './app.css';
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        selectedPerson: null
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const { getPerson,
                getStarship,
                getPlanet,
                getPersonImage,
                getStarshipImage,
                getPlanetImage} = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage} />
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getPlanet}
                getImageUrl={getStarshipImage} />
        );

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />
                    {/*{ planet }*/}

                    <Row
                        left={personDetails}
                        right={starshipDetails} />

                    {/*<button*/}
                    {/*    className="toggle-planet btn btn-warning btn-lg"*/}
                    {/*    onClick={this.toggleRandomPlanet}>*/}
                    {/*    Toggle Random Planet*/}
                    {/*</button>*/}
                </div>
            </ErrorBoundry>
        );
    }
}
