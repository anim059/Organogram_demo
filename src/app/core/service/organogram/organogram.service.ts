import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 
import { DepNode } from '../../model/Organogram-System/OgDepNode';

@Injectable({
  providedIn: 'root'
})

export class OrganogramService {


  
  departmentList :any[] = [
    {
      id: 3,
      name:"Frontend",
      parentId: "",
      color : "",
      children : [
        {
          id: 6,
          name : "Sr.Engr",
          color : "",
          parentId: 3,
          children : [
            {
              id: 7,
              name : "Jr.Engr 1",
              color : "",
              parentId: 6,
              children:[]
            },
            {
              id: 8,
              name : "Mid.Engr",
              color : "",
              parentId: 6,
              children:[
                {
                  id: 10,
                  name : "Intern Engr 1",
                  color : "",
                  parentId: 8,
                  children:[]
                },
                {
                  id: 11,
                  name : "Intern Engr 2",
                  color : "",
                  parentId: 8,
                  children:[]
                }
              ]
            },
            {
              id: 9,
              name : "Mid.Engr 2",
              color : "",
              parentId: 6,
              children:[]
            },
            {
              id: 13,
              name : "Jr.Engr 2",
              color : "",
              parentId: 6,
              children:[]
            },
            {
              id: 14,
              name : "Jr.Engr 3",
              color : "",
              parentId: 6,
              children:[]
            },
            {
              id: 15,
              name : "Jr.Engr 4",
              color : "",
              parentId: 6,
              children:[]
            },
          ]
        },
        {
          id: 12,
          name : "Designation",
          color : "",
          parentId: 3,
          children:[
            {
              id: 16,
              name : "Designation 1",
              color : "",
              parentId: 12,
              children:[]
            },
            {
              id: 17,
              name : "Designation 2",
              color : "",
              parentId: 12,
              children:[]
            },
            {
              id: 18,
              name : "Designation 3",
              color : "",
              parentId: 12,
              children:[]
            },
            {
              id: 19,
              name : "Designation 4",
              color : "",
              parentId: 12,
              children:[]
            },
            {
              id: 20,
              name : "Designation 5",
              color : "",
              parentId: 12,
              children:[]
            },
          ]
        }
      ]
    },
    {
      id: 4,
      name:"Backend",
      color : "",
      children : [
        {
          id: 21,
          name : "Sr.Engr",
          color : "",
          parentId: 4,
          children : [
            {
              id: 22,
              name : "Jr.Engr",
              color : "",
              parentId: 21,
              children : [ 
              ]
            },
            {
              id: 23,
              name : "Mid.Engr",
              color : "",
              parentId: 21,
              children : [
                {
                  id: 24,
                  name : "Intern",
                  color : "",
                  parentId: 23,
                  children : [
                    
                  ]
                }
                
              ]
            }
          ]
        }
      ]
    },
    {
      id: 5,
      name:"ECU",
      color : "",
      children : [

      ]
    }
  ];
  
  constructor(private httpClient : HttpClient) { }

  total : number = 24;
  public refresh = new BehaviorSubject(false);

  httpOptions = {
    headers : new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getDepartmentData(){
    return this.departmentList
  }

  insertNodeToParent(obj:any,dname:string){
    let childNodeInfo =  {
      id: this.total++,
      name : obj.childNode,
      parentId: obj.parentId,
      color : obj.designationColor,
      children:[]
    }
    this.SelectDepartment(this.departmentList,obj.parentId,obj.parentName,dname,childNodeInfo);
    this.refresh.next(true);
    console.log(this.departmentList);
  }


  SelectDepartment(departmentList:any,pid:number,pname:string,dname:string,nodeObj:any){
    let index;
    for(var val in departmentList){
      if(departmentList[val].name === dname){
        index = val;
        break;
      }
    }
    this.findParentNode(this.departmentList[Number(index)],pid,pname,nodeObj);
    
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
  // postDepartmentData(TreeNode:any){
  //   console.log(TreeNode[0]);
  //   return this.httpClient.post<any>('http://localhost:3000/TREE_DATA',TreeNode[0]).pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  
}
