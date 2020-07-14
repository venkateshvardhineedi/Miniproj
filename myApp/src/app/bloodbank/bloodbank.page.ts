import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular'
declare var google;



@Component({
  selector: 'app-bloodbank',
  templateUrl: './bloodbank.page.html',
  styleUrls: ['./bloodbank.page.scss'],
})
export class BloodbankPage {
  pois:any[];
  constructor(public platform : Platform) {
     this.platform.ready().then(()=>{
   var gps= new google.maps.LatLng(16.496545, 81.880124);
   /* 28.430945599999998, 77.03660839999999 */
   var radius = 1000;
   var type : [ 'restaurant' ];
   this.GetNearestPlaces(gps,radius);
     })
  }

  GetNearestPlaces(gps,radiusInmetre){
    var request ={
      location : gps,
      radius : radiusInmetre
    }

    var container = document.getElementById('poidiv');
    var service = new google.maps.places.PlacesService(container);
    var ref = this;
    service.nearbySearch(request, function(results, status)
    {
      console.log(results);
      if(status === google.maps.places.PlacesServiceStatus.OK){
        
            ref.pois = results;
            ref.pois.shift();
            console.log("pois",ref.pois);
      }
    })

  }
    
 
  

}
