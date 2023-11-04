import express from 'express';
import cors from 'cors';
import { variables } from './utilities/variables';
import { createApi } from './routes/main';
import "reflect-metadata";
import { AppdataSource } from './database/confit';

const app = express();
AppdataSource.initialize().then(()=>console.log('conectado a la base de datos'));
app.use(cors());
app.use(express.json());

createApi(app);

app.listen(variables.port,()=>console.log(`http://localhost:${variables.port}`));