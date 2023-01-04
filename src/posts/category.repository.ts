import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryRepository extends Repository<Category> {
  constructor(private datasource: DataSource) {
    super(Category, datasource.createEntityManager());
  }
}
