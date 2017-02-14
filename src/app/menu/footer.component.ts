import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['./stylesheet.scss', './stylesheet.media.scss']
})
export class FooterComponent implements OnInit {
    constructor(private _location:Location) { }
    back(){
        this._location.back();
    }
    ngOnInit() { }

}