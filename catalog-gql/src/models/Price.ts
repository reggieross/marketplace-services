import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseModel } from './BaseModel';
import { Product } from './Product';

export type TPrice = {
  amount: number;
  url?: string;
  site?: string;
  currency?: string;
  productId?: string;
};

@Entity({ name: 'price' })
export class Price extends BaseModel implements TPrice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'float' })
  amount: number;

  @Column({ nullable: true, type: 'varchar' })
  url?: string;

  @Column({ nullable: true, type: 'varchar' })
  site?: string;

  @Column({ nullable: true, type: 'varchar' })
  currency?: string;

  @ManyToOne(() => Product, (product) => product.price)
  @JoinColumn({ referencedColumnName: 'id', name: 'product_id' })
  product: Product;

  @Column({ nullable: true, type: 'uuid', name: 'product_id' })
  productId: string;
}
