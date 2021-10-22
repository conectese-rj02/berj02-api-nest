import { EntityRepository, Repository } from "typeorm";
import { Category } from "./category.entity";
import { CreateCategoryDto } from "./dto/create-category.dto";

@EntityRepository(Category)
export class CategoriesRepository extends Repository<Category> {

    async getCategories(): Promise<Category[]> {
       
        const query = this.createQueryBuilder("category");

        return await query.getMany();

    }

    async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {

        const { name } = createCategoryDto;

        const newCategory = this.create({
            name
        });

        await this.save(newCategory);

        return newCategory;

    }

}