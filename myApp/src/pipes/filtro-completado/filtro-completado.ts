import { Pipe, PipeTransform } from '@angular/core';
import { list } from '../../models/lis.model';

/**
 * Generated class for the FiltroCompletadoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(listas: list [], completada: boolean, ...args) {

    return listas.filter(listas => {
      return listas.terminodo === completada
    });
    
  }
}
