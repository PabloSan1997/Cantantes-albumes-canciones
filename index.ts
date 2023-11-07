import express from 'express';
import cors from 'cors';
import { variables } from './utilities/variables';
import { createApi } from './routes/main';
import "reflect-metadata";
import { AppdataSource } from './database/confit';
import { boomHandle } from './middleware/boomHandle';
import { advertHandle } from './middleware/advertHandle';

AppdataSource.initialize().then(() => {
    console.log('conectado a la base de datos');
    inicio();
});

function inicio() {
    const app = express();
    app.use('/', express.static('listsongs'));
    app.use(cors());
    app.use(express.json());
    app.use(advertHandle);

    createApi(app);

    app.use(boomHandle);


    app.listen(variables.port, () => console.log(`http://localhost:${variables.port}`));
}