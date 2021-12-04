import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BaseModel } from './BaseModel';
import { Product } from './Product';

export type TBrand = {
  id: string;
  name: string;
};

@Entity({ name: 'brand' })
export class Brand extends BaseModel implements TBrand {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true, type: 'varchar' })
  name: string;

  @OneToMany(() => Product, (product) => product.brand)
  product: Product[];
}
