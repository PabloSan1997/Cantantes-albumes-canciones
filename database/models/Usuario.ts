import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Usuario{
    @PrimaryGeneratedColumn('uuid')
    id_usuario:string;

    @Column({length:300})
    name:string;

    @Column({length:300, unique:true})
    email:string;

    @Column({length:5000})
    password:string;
}