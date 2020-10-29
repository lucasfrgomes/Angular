import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Geo, ResponseUser } from '../user.model';
import { UsersService } from '../users.service';
import * as ol from '../../../../node_modules/ol';

import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: string;
  request : ResponseUser;
  geoLocal : Geo;

  constructor(private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res => {
      this.request = {
        id: res.id,
        name: res.name,
        username: res.username,
        email: res.email,
        address: res.address,
        phone: res.phone,
        website: res.website,
        company: res.company,
        
      },
      this.geoLocal = {
        lat: res.address.geo.lat,
        lng: res.address.geo.lng
      }
      alert("lat: "+ this.geoLocal.lat + " | lng: " + this.geoLocal.lng)
      map: new Map({
        target: 'hotel_map',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: olProj.fromLonLat([this.geoLocal.lng, this.geoLocal.lat]),
          zoom: 7
        })
      });
      })
  }

}