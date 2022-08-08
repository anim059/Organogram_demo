export interface DepNode{
    id?:number;
    name:string;
    rootRoleNode?:{};
    children?:DepNode[];
    hasparent:boolean;
    parentDep?:string;
}

export interface DepRoleNode{
    id?:number;
    name:string;
    children?:DepRoleNode[];
}