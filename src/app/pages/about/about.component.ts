import { Component, OnInit } from '@angular/core';
import { AboutImage } from '../../shared/images/images';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', './about-media-query.scss']
})
export class AboutComponent implements OnInit {
  image = AboutImage;
  constructor() { }

  ngOnInit() {
  }

}
