import { EntityRepository, Repository } from "typeorm";
import { CreatePlaceDto } from "./dto/create-place.dto";
import { GetPlacesFilterDto } from "./dto/get-places-filter.dto";
import { PlaceStatus } from "./place-status.enum";
import { Place } from "./place.entity";

// Manipulação dos Dados
@EntityRepository(Place)
export class PlacesRepository extends Repository<Place> {

    async getPlaces(filterDto: GetPlacesFilterDto): Promise<Place[]> {

        const { search, status } = filterDto;

        // SELECT * FROM place;
        const query = this.createQueryBuilder("place");

        if (status) {
            // SELECT * FROM place WHERE status = "Funcionando" AND name = "Corcovado";
            query.andWhere("place.status = :status", { status });
        }

        if (search) {
            // SELECT * FROM place WHERE name = "Corcovado";
            // SELECT * FROM place WHERE name LIKE "%corcovado%";
            query.andWhere("LOWER(place.name) LIKE LOWER(:search) OR LOWER(place.address) LIKE LOWER(:search) OR LOWER(place.description) LIKE LOWER(:search)", { search: `%${search}%` });
        }

        return await query.getMany();

    }
    
    async createPlace(createPlaceDto: CreatePlaceDto): Promise<Place> {

        const { name, site, address, image, ticket, description } = createPlaceDto;

        const place = this.create({
            name,
            site,
            address,
            image,
            ticket,
            description,
            status: PlaceStatus.ACTIVE,
        });

        await this.save(place);

        return place;

    }

}