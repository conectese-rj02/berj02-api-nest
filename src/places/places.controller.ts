import { Controller, Get } from '@nestjs/common';

// http://localhost:3000/places
@Controller('places')
export class PlacesController {

    // http://localhost:3000/places
    @Get()
    hello() {
        return "Olá projeto Conecte-se";
    }

    // http://localhost:3000/places/hcode
    @Get("hcode")
    hcode() {
        return "Sejam bem-vindos!!!";
    }

}
