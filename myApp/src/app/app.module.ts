import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { pendientesPage } from '../pages/pendientes/pendientes.component';
import { terminadosPage } from '../pages/terminados/terminados.component';
import { agregarPage } from '../pages/agregar/agregar.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { myAppService } from '../services/myApp.service';

import { FiltroCompletadoPipe } from '../pipes/filtro-completado/filtro-completado';

import { compartidoComponent } from '../components/compartido.component';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    pendientesPage,
    terminadosPage,
    agregarPage,
    FiltroCompletadoPipe,
    compartidoComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    pendientesPage, 
    terminadosPage, 
    agregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    myAppService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
