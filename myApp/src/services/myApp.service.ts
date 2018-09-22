import { Injectable } from "@angular/core";
import { list } from "../models";

@Injectable()
export class myAppService{

    listas: list[] = [];

    constructor(){
        this.cargarStorege();
    }

    agregarLista( lista: list){
        this.listas.push(lista);
        
        this.guardarStorege();
    }

    borrarLista(listas: list){

    }

    guardarStorege(){
        localStorage.setItem('data', JSON.stringify( this.listas ));
    }

    cargarStorege(){
        if (localStorage.getItem('data')) {
            this.listas = JSON.parse( localStorage.getItem('data'));
        }else{
            this.listas = [];
        }
    }
}