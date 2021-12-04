import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseModel } from './BaseModel';
import { Price } from './Price';
import { Brand } from './Brand';

export type TProduct = {
  id: string;
  name: string;
  brandId?: string;
};

@Entity({ name: 'product' })
export class Product extends BaseModel implements TProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true, type: 'varchar' })
  name: string;

  @ManyToOne(() => Brand, (brand) => brand.product)
  @JoinColumn({ referencedColumnName: 'id', name: 'brand_id' })
  brand: Brand;

  @Column({ nullable: true, type: 'uuid', name: 'brand_id' })
  brandId?: string;

  @OneToMany(() => Price, (price) => price.product)
  price: Price[];
}
