import { Component } from "@angular/core";
import { myAppService } from '../../services/myApp.service';
import { list } from '../../models/lis.model';
import { NavController, AlertController } from 'ionic-angular';
import { agregarPage } from '../agregar/agregar.component';

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class pendientesPage {

    constructor( public _myAppService: myAppService,
        private navCtrl: NavController,
        private alertCtrl: AlertController ){

    }

    agregarLista(){
        const alerta = this.alertCtrl.create({
            title: 'Nueva lista',
            message: 'nombre de la nueva lista que desea',
            inputs:[{
                name: 'titulo',
                placeholder: 'nombre de la lista'
            }],
            buttons: [{
                text: 'cancelar'
            },
        {
            text: 'guardar',
            handler: data => {
                if (data.titulo.length === 0) {
                    return;
                }
                    this.navCtrl.push(agregarPage, {
                        titulo: data.titulo
                    });
            }
        }]
        });

        alerta.present();
    }
}