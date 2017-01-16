import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { LocalStorageService } from 'angular-2-local-storage'

@Injectable()
export class UploadService {

    constructor(private af:AngularFire, localStorage:LocalStorageService) { }


    uploadImage(selectedFile){
        let filename = selectedFile.name;
        let storageRef = firebase.storage().ref('/images/' + filename);
        let uploadTask = storageRef.put(selectedFile);
        uploadTask.on('state_changed', (snapshot)=>{

        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
        // localStorage.setItem('downloadURL', (downloadURL) );
        
        
        console.log(downloadURL);
        
        }
    )
    }

}