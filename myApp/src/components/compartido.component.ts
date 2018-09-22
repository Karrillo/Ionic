import { Component, Input } from "@angular/core";
import { myAppService } from '../services/myApp.service';
import { NavController } from 'ionic-angular';
import { list } from '../models/lis.model';
import { agregarPage } from '../pages/agregar/agregar.component';

@Component({
    selector: 'app-compartido',
    templateUrl: 'compartido.component.html'
})
export class compartidoComponent {

    @Input() terminada: boolean = false;

    constructor( public _myAppService: myAppService,
        private navCtrl: NavController ){

    }

    listaSeleccionada(lista: list){

        console.log(lista);
        this.navCtrl.push(agregarPage, {
            titulo: lista.titulo,
            lista: lista
        });
    }

    borrarLista(lista: list){
        this._myAppService.borrarLista(lista);
    }


}