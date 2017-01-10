import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideHistory'
})
export class HideHistoryPipe implements PipeTransform {

  private now = new Date();

  transform(endorses: any[], hide: boolean): any {
    if(hide===false)
    {
      return endorses;
    }
    else
    {
      return endorses.filter((endorse)=>{
        return (this.now.getTime() - parseInt(endorse['secondSignedTime']))/(60*1000*60*24) <= 60
      })
    }
  }

}
