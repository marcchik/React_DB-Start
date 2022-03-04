import React from 'react';
import ItemList from '../item-list';
import {
    withData,
    withSwapiService,
    withChildFunction,
    сompose
} from '../hoc-helpers';


const renderName = ({ name }) => <span>{name}</span>;

const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const PersonList = сompose(
                    withSwapiService(mapPersonMethodsToProps),
                    withData,
                    withChildFunction(renderName)
                    )(ItemList);

const PlanetList = сompose(
                    withSwapiService(mapPlanetMethodsToProps),
                    withData,
                    withChildFunction(renderName)
                    )(ItemList);

const StarshipList = сompose(
                        withSwapiService(mapStarshipMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                    )(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};
