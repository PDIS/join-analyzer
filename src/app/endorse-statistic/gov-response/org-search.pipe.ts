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
            this.slaveOrgSearch(endorse.approvalOrganization.slave,query)
          )
        }
      });
  }

  private slaveOrgSearch(slaves,query):boolean
  {
    for(var i in slaves)
    {
      if(slaves[i].organizationName.indexOf(query) !== -1)
        return true;
    }
    return false;
  }
}