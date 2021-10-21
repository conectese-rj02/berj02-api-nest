import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceStatusDto } from './dto/update-place-status.dto';
import { Place } from './place.model';
import { PlacesService } from './places.service';

// http://localhost:3000/places
@Controller('places')
export class PlacesController {

    constructor(private placesService: PlacesService) {}

    // GET http://localhost:3000/places - Listar todos os lugares
    @Get()
    getAllPlaces(): Place[] {
        return this.placesService.getAllPlaces();
    }

    // GET http://localhost:3000/places/123456 - Ver as informações de um lugar específico
    @Get(":id")
    getPlaceById(@Param("id") id: string) {
        return this.placesService.getPlaceById(id);
    }

    // POST http://localhost:3000/places - Criar um novo lugar
    @Post()
    createPlace(
        @Body() newPlace: CreatePlaceDto        
    ): Place {

        return this.placesService.createPlace(newPlace);

    }

    // PATCH http://localhost:3000/places/123456/status
    @Patch(":id/status")
    updatePlaceStatus(
        @Param("id") id: string,
        @Body() newStatus: UpdatePlaceStatusDto
    ) {

        const { status } = newStatus;

        return this.placesService.updatePlaceStatus(id, status);

    }

    // PATCH http://localhost:3000/places/jjnjnjsndjsnjn - Atualizar as informações de um lugar
    
    // DELETE http://localhost:3000/places/jbjnkmlss - Excluir as informações de um lugar
    @Delete(":id")
    deletePlace(@Param("id") id: string): void {
        return this.placesService.deletePlace(id);
    }

}
