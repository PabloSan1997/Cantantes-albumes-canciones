import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable} from 'typeorm';
import { Cancion } from './Cancion';
import { Cantante } from './Cantante';

@Entity()
export class Album{
  @PrimaryGeneratedColumn('uuid')
  id_cantante:string;

  @Column({length:200})
  name:string;

  @Column({type:'timestamp with time zone'})
  release:Date;

  @Column({length:5000})
  url_album:string;

  @OneToMany(()=>Cancion, canciones=> canciones.album)
  canciones:Cancion[];

  @ManyToMany(()=>Cantante, cantantes => cantantes.albumes)
  @JoinTable()
  cantantes:Cantante[]
}

