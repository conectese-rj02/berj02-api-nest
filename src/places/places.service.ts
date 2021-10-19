import { Injectable } from '@nestjs/common';
import { Place, PlaceStatus } from './place.model';

@Injectable()
export class PlacesService {

    private places: Place[] = [];

    getAllPlaces(): Place[] {
        return this.places;
    }

    createPlace(
        name: string,
        site: string,
        address: string,
        image: string,
        ticket: string,
        description: string,
    ): Place {

        const place: Place = {
            id: "",
            name,
            site,
            address,
            image,
            ticket,
            description,
            status: PlaceStatus.ACTIVE,
        }

        this.places.push(place);

        return place;

    }

}
