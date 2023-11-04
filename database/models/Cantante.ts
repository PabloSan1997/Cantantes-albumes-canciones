import {Entity, Column, PrimaryGeneratedColumn, ManyToMany} from 'typeorm';
import { Album } from './Album';

@Entity()
export class Cantante{
  @PrimaryGeneratedColumn('uuid')
  id_cantante:string;

  @Column({length:200})
  name:string;

  @Column({type:'timestamp with time zone'})
  birthday:Date;

  @Column({length:200})
  nationality:string;

  @Column({length:5000})
  url_cantante:string;

  @ManyToMany(()=>Album, albumes=>albumes.canciones)
  albumes:Album[]
}

