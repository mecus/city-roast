import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { iBlog, iBody } from '../../../models/blog.model';
// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';



@Component({
    selector: 'new-blog',
    templateUrl: './newblog.component.html',
    styleUrls: ['./blog.component.scss']

})
export class NewBlog implements OnInit {
    title = "Blog Works";
    blogForm:FormGroup;
    headers:boolean = false;
    returnImage =""; //"https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/blogimages%2FDSCN0715-min-min.JPG?alt=media&token=1a1de55a-2c16-49dd-a5cd-b171b8c38a7f";
    progress:number;
    constructor(private blogService:BlogService, 
                private _fb:FormBuilder, private _router:Router){}

    @HostListener('change', ['$event']) onChange($event) {
            let newFile = $event.target.files[0];
            this.uploadImage(newFile);
        // console.log(this.newFile);
    }

    ngOnInit(){
        this.blogForm = this._fb.group({
            title: "",
            blogImage: "",
            postdate: new Date().toString(),
            body: this._fb.array([
                this.initParagraph(),
            ])
        })
    }
    initParagraph(){
        return this._fb.group({
            header: "",
            paragraph: ""
        })
    }
    addParagraph(){
        const control =<FormArray> this.blogForm.controls['body'];
        control.push(this.initParagraph());
    }
    removeParagraph(i:number){
        const control =<FormArray> this.blogForm.controls['body'];
        control.removeAt(i);
    }
    toggleHeader(){
        this.headers = this.headers? true : false;
    }
    createBlog(blog){
        // console.log(blog);
        this.blogService.createBlog(blog).subscribe((res)=>{
            console.log(res);
        });
        this._router.navigate(["/dashboard/blogs"]);
    }

    //Uploading Image to firebase
    uploadImage(selectedFile){
        let filename = selectedFile.name;
        let storageRef = firebase.storage().ref('/blogimages/' + filename);
        let uploadTask = storageRef.put(selectedFile);
        uploadTask.on('state_changed', (snapshot)=>{

        // this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;    
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
        this.progress = Math.round(progress);
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
        }, (error)=> {
            console.log(error);
        // Handle unsuccessful uploads
        }, ()=> {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        let downloadURL = uploadTask.snapshot.downloadURL;
        this.returnImage = uploadTask.snapshot.downloadURL;
        // localStorage.setItem('downloadURL', (downloadURL) );
        this.blogForm.patchValue({
            blogImage: uploadTask.snapshot.downloadURL
            
        })
        
        console.log(downloadURL);
        
        }
        )
    }
}