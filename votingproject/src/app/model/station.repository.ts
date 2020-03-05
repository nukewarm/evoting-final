import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { Stations } from './station.model';

@Injectable()
export class StationRepository {

    public unactivatedStations: [];
    public activatedStations: [];
    public stations: Stations[];

    constructor(private datasource: RestDataSource) {
        datasource.getUnactivatedStations().subscribe(data => {
            this.unactivatedStations = data;
        });
        datasource.getActivatedStations().subscribe(data => {
            this.activatedStations = data;
        });
        datasource.getAllStations().subscribe(data => {
            this.stations = data;
        });
    }

    viewUnactivatedStations(): [] {
        return this.unactivatedStations;
    }

    viewActivatedStations(): [] {
        return this.activatedStations;
    }

    saveStation(station: Stations) {
        return this.datasource.updateStation(station);
    }

    viewAllStation(): Stations[] {
        return this.stations;
    }

    viewStationById(id: string): Stations {
        return this.stations.find(d => d.stationid == id);
    }
}