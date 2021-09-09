import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted user', this.email);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated user', this.email);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed user', this.email);
  }
}
