import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import * as _ from 'lodash';


@Component({
    selector: 'blog-post',
    templateUrl: 'blog.component.html',
    styleUrls: ['blog.component.scss']

})

export class BlogPostComponent implements OnInit {
    blog$;
    nextBlog$;
    constructor(
        private blogService:BlogService, private route:ActivatedRoute,
        private _router:Router, private title:Title
    ){}
    readBlog(blog){
        this._router.navigate(["/blog/?", {key: blog.key, title: blog.data.title}]);
    }
    ngOnInit(){

        this.route.params.forEach((param:Params)=>{
            this.blogService.getCacheBlog().subscribe(blogs=>{
                this.nextBlog$ = blogs;
                this.blog$ = _.first(_.filter(blogs, {"key": param["key"]}));
                this.title.setTitle(this.blog$.data.title);
                // console.log(this.blog$);
            });
        })
    }
}