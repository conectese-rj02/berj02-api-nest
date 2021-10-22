import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

// http://localhost:3000/categories
@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService) {}

    // GET http://localhost:3000/categories
    @Get()
    async getAllCategories(): Promise<Category[]> {

        return await this.categoriesService.getAllCategories();

    }

    // GET http://localhost:3000/categories/1
    @Get(":id")
    async getCategoryById(@Param("id") id: number): Promise<Category> {

        return await this.categoriesService.getCategoryById(id);

    }
    
    // POST http://localhost:3000/categories
    @Post()
    async createCategory(@Body() newCategory: CreateCategoryDto): Promise<Category> {

        return await this.categoriesService.createCategory(newCategory);

    }

    // DELETE http://localhost:3000/categories/123456
    @Delete(":categoryId")
    async deleteCategory(@Param("categoryId") categoryId: number): Promise<void> {

        return await this.categoriesService.deleteCategory(categoryId);

    }

}
