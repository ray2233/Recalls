import { Pipe, PipeTransform, Injectable } from '@angular/core';


@Pipe({
    name: 'freeSearchFilter',
})
@Injectable()
export class freeSearchFilterPipe implements PipeTransform {
    transform(value:any[],searchString:string ){

        if(!searchString){
          console.log('no search')
          return value  
        }
        return value.filter(it=>{   
            const productName = it.productName.toString().includes(searchString) 
            const type = it.type.toLowerCase().includes(searchString.toLowerCase())
            const injuries = it.injuries.toLowerCase().includes(searchString.toLowerCase())
            const activeTrollingCount = it.activeTrollingCount.toString().includes(searchString) 
            const trollingContext = it.trollingContext.toString().includes(searchString) 
            return (productName + type + injuries + activeTrollingCount + trollingContext);      
        }) 
     }
}