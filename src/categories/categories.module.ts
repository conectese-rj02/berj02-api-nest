import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CategoriesRepository } from './category.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([CategoriesRepository]),
    ],
    providers: [CategoriesService],
    controllers: [CategoriesController]
})
export class CategoriesModule {}
