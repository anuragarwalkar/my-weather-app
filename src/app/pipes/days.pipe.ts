import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {


  transform(value: any, args?: any): any {

    let today = new Date();
    let td:any = today.getDate()+1;
    let dd:any = today.getDate();
    let mm:any = today.getMonth()+1;
    let yyyy:any = today.getFullYear();
    

    if (dd < 10 || td < 10) {
    dd = '0' + dd;
    td = '0' + td;
    }

    if (mm < 10) {
    mm = '0' + mm;
    }

    const todayDate =  `${yyyy}-${mm}-${dd}`;
    const tomorrowDate = `${yyyy}-${mm}-${td}`;

    if(value == todayDate ){
      // console.log('if')
    return 'Today'
    }else if(value == tomorrowDate){
    return 'Tomorrow'
    }else {
      // console.log(todayDate, tomorrowDate)
      return new DatePipe('en-us').transform(value, 'EEE d MMM');
    }
  }

}
