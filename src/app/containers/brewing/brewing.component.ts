import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-brewing',
  templateUrl: './brewing.component.html',
  styleUrls: ['./brewing.component.scss', './brewing-media-query.scss']
})
export class BrewingComponent implements OnInit {

  constructor(private title:Title) {
    title.setTitle('Brewing Methed');
   }

  ngOnInit() {
  }

}
