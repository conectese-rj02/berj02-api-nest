import { IsNotEmpty } from "class-validator";

export class CreatePlaceDto {
    @IsNotEmpty({ message: "O campo nome é obrigatório." })
    name: string;

    @IsNotEmpty({ message: "O campo site é obrigatório." })
    site: string;
    
    @IsNotEmpty({ message: "O campo de endereço é obrigatório." })
    address: string;
    
    image: string;
    
    ticket: string;
    
    @IsNotEmpty({ message: "A descrição é obrigatória." })
    description: string;
}