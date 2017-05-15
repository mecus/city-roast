import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { Observable } from 'rxjs/Observable';
import { iBlog } from '../../../models/blog.model';


@Component({
    selector: 'post-blog',
    templateUrl: './blog.component.html'

})
export class BlogPost implements OnInit {
    private blogs;

    constructor(private blogService:BlogService){}

    ngOnInit(){
        this.blogService.getBlog().subscribe((blogs)=>{
            this.blogs = blogs;
        });
    }
    removeBlog(key){
        let R = confirm("Are you sure");
        if(R==true){
            this.blogService.deleteBlog(key);
        }
        
    }
}