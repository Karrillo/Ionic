import { listItem } from './list-item.model';

export class list{
    id: number;
    titulo: string;
    creada: Date;
    finalizada: Date;
    terminodo: boolean;
    items: listItem[];
    
    constructor( _titulo: string){
        this.titulo = _titulo;
        this.terminodo = false;
        this.creada = new Date();
        this.finalizada = new Date();
        this.items = [];
        this.id = new Date().getTime();

    }
}