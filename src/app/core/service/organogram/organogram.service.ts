import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DepNode } from '../../model/Organogram-System/OgDepNode';

@Injectable({
  providedIn: 'root'
})

export class OrganogramService {
  
  constructor(private httpClient : HttpClient) { }


  httpOptions = {
    headers : new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getDepartmentData(){
    return this.httpClient.get('http://localhost:3000/TREE_DATA');
  }
  // postDepartmentData(TreeNode:any){
  //   console.log(TreeNode[0]);
  //   return this.httpClient.post<any>('http://localhost:3000/TREE_DATA',TreeNode[0]).pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  
}
