import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { GetPlacesFilterDto } from './dto/get-places-filter.dto';
import { UpdatePlaceStatusDto } from './dto/update-place-status.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place } from './place.entity';
import { PlacesService } from './places.service';

// http://localhost:3000/places
@Controller('places')
export class PlacesController {

    constructor(private placesService: PlacesService) {}

    // GET http://localhost:3000/places?search=maracana&status=Fechado - Listar todos os lugares
    @Get()
    async getAllPlaces(@Query() filterDto: GetPlacesFilterDto): Promise<Place[]> {
        return await this.placesService.getAllPlaces(filterDto);
    }

    // GET http://localhost:3000/places/123456 - Ver as informações de um lugar específico
    @Get(":id")
    async getPlaceById(@Param("id") id: string): Promise<Place> {
        return await this.placesService.getPlaceById(id);
    }

    
    // POST http://localhost:3000/places - Criar um novo lugar
    @Post()
    async createPlace(
        @Body() newPlace: CreatePlaceDto        
    ): Promise<Place> {

        return await this.placesService.createPlace(newPlace);

    }
    
    // PATCH http://localhost:3000/places/123456/status
    @Patch(":id/status")
    async updatePlaceStatus(
        @Param("id") id: string,
        @Body() newStatus: UpdatePlaceStatusDto
    ): Promise<Place> {

        const { status } = newStatus;

        return await this.placesService.updatePlaceStatus(id, status);

    }

    // PATCH http://localhost:3000/places/jjnjnjsndjsnjn - Atualizar as informações de um lugar
    @Patch(":id")
    async updatePlace(
        @Param("id") id: string,
        @Body() updatePlaceDto: UpdatePlaceDto
    ): Promise<Place> {

        return await this.placesService.updatePlace(id, updatePlaceDto);

    }

    // DELETE http://localhost:3000/places/jbjnkmlss - Excluir as informações de um lugar
    @Delete(":id")
    async deletePlace(@Param("id") id: string): Promise<void> {
        return await this.placesService.deletePlace(id);
    }

}
