import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserOrganogramService {

  userRoleList :any[] = [
    {
      id: 3,
      name:"Frontend",
      parentId: "",
      children : [
      ]
    },
    {
      id: 4,
      name:"Backend",
      children : [

      ]
    },
    {
      id: 5,
      name:"ECU",
      children : [

      ]
    }
  ];


  constructor() { }

  totalUser : number = 6;
  public refresh = new BehaviorSubject(false);


  getUserRoleData(){
    return this.userRoleList
  }

  insertNodeToParent(obj:any,dname:string){
    console.log(obj);
    let childNodeInfo =  {
      id: this.totalUser++,
      name : obj.childNode,
      parentId: obj.parentId,
      backgroundColor : obj.color,
      children:[]
    }

    this.SelectDepartment(this.userRoleList,obj.parentId,obj.parentName,dname,childNodeInfo);
    this.refresh.next(true);
   
  }


  SelectDepartment(userRoleList:any,pid:number,pname:string,dname:string,nodeObj:any){
    let index;
    for(var val in userRoleList){
      if(userRoleList[val].name === dname){
        index = val;
        break;
      }
    }
    this.findParentNode(this.userRoleList[Number(index)],pid,pname,nodeObj);
    console.log(this.userRoleList);
  }


  findParentNode(obj:any,pid:number,pname:string,nodeObj:any){
    console.log(obj.id);
    console.log(obj.name);
    
    console.log(pid);
    console.log(pname);

    if(obj.id === Number(pid) && obj.name === pname){
      console.log(obj);
      obj.children.push(nodeObj);
      return;
    }
  
    for(var i in obj.children ){
      this.findParentNode(obj.children[Number(i)],pid,pname,nodeObj);
    }
  }
}
