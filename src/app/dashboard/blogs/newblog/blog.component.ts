import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { Observable } from 'rxjs/Observable';
import { iBlog } from '../../../models/blog.model';


@Component({
    selector: 'post-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['blog.component.scss']

})
export class BlogPost implements OnInit {
    pageSize = 5;
    page:Number = 1;
    blogs;

    constructor(private blogService:BlogService){}

    ngOnInit(){
        this.blogService.getCacheBlog().subscribe((blogs)=>{
            this.blogs = blogs;
        });
    }
    removeBlog(blog){
        let R = confirm("Are you sure");
        if(R==true){
            this.blogService.deleteBlog(blog);
        }
        
    }
}