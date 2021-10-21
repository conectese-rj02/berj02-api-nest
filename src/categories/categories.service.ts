import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { v4 as uuid } from "uuid";

@Injectable()
export class CategoriesService {

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

}
