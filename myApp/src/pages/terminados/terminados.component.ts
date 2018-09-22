import { Component } from "@angular/core";
import { myAppService } from '../../services/myApp.service';
import { list } from '../../models/lis.model';

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html'
})
export class terminadosPage {

    constructor( public _myAppService: myAppService ){

    }

}