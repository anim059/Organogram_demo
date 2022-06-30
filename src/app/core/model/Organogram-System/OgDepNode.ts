export interface DepNode{
    id?:number;
    name:string;
    children?:DepNode[];
    hasparent:boolean;
    parentDep?:string;
}