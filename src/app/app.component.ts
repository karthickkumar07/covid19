import { Component } from '@angular/core';
import {CovidService} from './covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    city=["Ariyalur","Chengalpattu","Chennai","Coimbatore",
           "Cuddalore","Dharmapuri","Dindigul","Erode",
           "Kallakurichi","Kancheepuram","Kanniyakumari",
           "Karur","Madurai","Nagapattinam","Namakkal",
           "Perambalur","Pudukkottai","Ramanathapuram",
           "Ranipet","Salem","Sivaganga","Tenkasi",
           "Thanjavur","The Nilgiris","Theni","Thiruvallur",
           "Thiruvarur","Thoothukkudi","Tiruchirappalli",
           "Tirunelveli","Tirupathur","Tiruppur","Tiruvannamalai",
           "Vellore","Viluppuram","Virudhunagar"
]
   citi:any
   ct:any
   coronoData:any
   confirmed:any
   active:any
   recovered:any
   deaths:any

    constructor(private covid:CovidService){
      this.confirmed="confirmed"
      this.active="active"
      this.recovered="recovered"
    }
    ngOnInit(){

    }
    getCoronaData(){
     // alert(this.citi);
      
      this.ct=this.citi;
      
      this.covid.getCity().subscribe((data)=>{
        this.confirmed=data["Tamil Nadu"].districtData[this.ct].confirmed;
        this.active=data["Tamil Nadu"].districtData[this.ct].active;
        this.recovered=data["Tamil Nadu"].districtData[this.ct].recovered;
        this.deaths=this.confirmed-(this.active+this.recovered);
        //console.log(a)
      })
      console.log(this.confirmed)
      console.log(this.active)

      console.log(this.recovered)

     
    }
    getCity(citi:any){
        this.citi=citi;
    }
}

