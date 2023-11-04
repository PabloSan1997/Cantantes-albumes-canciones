import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Album } from './Album';


@Entity()
export class Cancion{
  @PrimaryGeneratedColumn('uuid')
  id_cancion:string;

  @Column({length:200})
  name:string;

  @Column({length:50})
  song_duration:string;

  @ManyToOne(()=>Album, album=>album.canciones)
  album: Album;
}

