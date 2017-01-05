import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orgSearch'
})
export class OrgSearchPipe implements PipeTransform {
  transform(endorses: any[], query: string): any {
    if (query === "" || query === "*")
      return endorses;
    else
      return endorses.filter((endorse) => {
        console.log(endorse)
        if(endorse.approvalOrganization.master === "" && endorse.approvalOrganization.slave === ""){
          return false
        }
        else{
          return (
            endorse.approvalOrganization.master.organizationName.indexOf(query) !== -1
            ||
            JSON.stringify(endorse.approvalOrganization.slave).indexOf(query) !== -1
          )
        }
      });
  }
}