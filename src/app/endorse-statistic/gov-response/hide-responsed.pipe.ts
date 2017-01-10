import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideResponsed'
})
export class HideResponsedPipe implements PipeTransform {

  transform(endorses: any[], hide: boolean): any {
    if(hide===false)
    {
      return endorses;
    }
    else
    {
      return endorses.filter((endorse)=>{
        return endorse.govResponses.length === 0;
      })
    }
  }

}
