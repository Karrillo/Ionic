import { Component } from "@angular/core";
import { myAppService } from '../../services/myApp.service';
import { list } from '../../models/lis.model';
import { listItem } from '../../models/list-item.model';
import { NavParams } from "ionic-angular";

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})
export class agregarPage {

    lista: list;
    nombreItem: string = '';

    constructor( public _myAppService: myAppService,
        private navParams: NavParams ){

            const titulo = this.navParams.get('titulo');

            if (this.navParams.get('lista')) {
                this.lista = this.navParams.get('lista');
            }else{
                this.lista = new list(titulo);
                this._myAppService.agregarLista(this.lista);
            }

    }
    
    agregarItem(){
        if (this.nombreItem.length === 0) {
            return;
        }
        const nuevoItem = new listItem (this.nombreItem);
       
        this.lista.items.push(nuevoItem);

        this._myAppService.guardarStorege();

        this.nombreItem = '';
        }

        actualizar(item: listItem){
            item.complet = !item.complet;
            
            const pendientes = this.lista.items.filter( itemData => {
                return !itemData.complet;
            }).length;
    
            if ( pendientes === 0 ) {
                this.lista.terminodo = true;
                this.lista.finalizada = new Date();
            } else {
                this.lista.terminodo = false;
                this.lista.finalizada = null;
            }

            this._myAppService.guardarStorege();
        }

        borrar(i: number){
            this.lista.items.splice(i,1);
            this._myAppService.guardarStorege();
        }
}
