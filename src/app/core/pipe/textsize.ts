import { Pipe, PipeTransform} from "@angular/core";

@Pipe({name:'textSize'})
export class textSizePipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        console.log(value);
    }
    
}