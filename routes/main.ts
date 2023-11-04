import express, {Express} from 'express';


export function createApi(app:Express){
    const main = express.Router();
    app.use('/api/v1', main);

    main.get('/', (req,res)=>{
        res.json({message:"hola a todos"});
    });
}