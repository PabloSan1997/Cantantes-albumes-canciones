import {DataSource} from 'typeorm';
import { variables } from '../utilities/variables';

export const AppdataSource = new DataSource({
    type: 'postgres',
    url: variables.url_database,
    logging:true,
    synchronize:true,
    entities:[]
});