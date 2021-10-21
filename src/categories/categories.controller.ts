import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';

// http://localhost:3000/categories
@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService) {}

    // GET http://localhost:3000/categories
    @Get()
    getAllCategories(): Category[] {

        return this.categoriesService.getAllCategories();

    }

    // POST http://localhost:3000/categories
    @Post()
    createCategory(@Body() newCategory: CreateCategoryDto): Category {

        return this.categoriesService.createCategory(newCategory);

    }

    // DELETE http://localhost:3000/categories/123456
    @Delete(":categoryId")
    deleteCategory(@Param("categoryId") categoryId: string): void {

        return this.categoriesService.deleteCategory(categoryId);

    }

}
