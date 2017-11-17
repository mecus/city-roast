import { Component, OnInit } from '@angular/core';
import { AboutImage } from '../../shared/images/images';
import { Meta, Title } from '@angular/platform-browser';
declare var jquery: any;
declare var $:any;


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', './about-media-query.scss']
})
export class AboutComponent implements OnInit {
  image = AboutImage;
  constructor(private title:Title) { 
    title.setTitle('About us');
  }

  ngOnInit() {

    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });
  }

}
