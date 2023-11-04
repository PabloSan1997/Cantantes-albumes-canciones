import {DataSource} from 'typeorm';
import { variables } from '../utilities/variables';
import { Cancion } from './models/Cancion';
import { Cantante } from './models/Cantante';
import { Album } from './models/Album';

export const AppdataSource = new DataSource({
    type: 'postgres',
    url: variables.url_database,
    ssl:{
        rejectUnauthorized:false
    },
    logging:true,
    synchronize:true,
    entities:[Cancion, Cantante, Album]
});