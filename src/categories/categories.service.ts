import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { CategoriesRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {

    constructor(
        @InjectRepository(CategoriesRepository)
        private categoriesRepository: CategoriesRepository
    ) {}

    async getAllCategories(): Promise<Category[]> {
        
        return await this.categoriesRepository.getCategories();

    }

    async getCategoryById(id: number): Promise<Category> {

        const found = await this.categoriesRepository.findOne(id);

        if(!found) {
            throw new NotFoundException("ID não encontrado.");
        }

        return found;

    }

    async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {

        return await this.categoriesRepository.createCategory(createCategoryDto);

    }

    async deleteCategory(id: number): Promise<void> {

        const result = await this.categoriesRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException("ID não encontrado.");
        }

    }

    // Código novo

    /////////////////////////////////////////////
    // Código antigo
    /*
    private categories: Category[] = [];

    getAllCategories(): Category[] {
        return this.categories;
    }

    getCategoryById(id: string): Category {

        const found = this.categories.find((category) => category.id === id);

        if(!found) {
            throw new NotFoundException("ID não encontrado.");
        }

        return found;

    }

    createCategory(createCategoryDto: CreateCategoryDto): Category {

        const { name } = createCategoryDto;

        const newCategory: Category = {
            id: uuid(),
            name          
        };

        this.categories.push(newCategory);

        return newCategory;

    }

    deleteCategory(id: string): void {

        const category = this.getCategoryById(id);

        this.categories = this.categories.filter((item) => item.id !== category.id);

    }
    */

}
