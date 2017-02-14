export interface iContact {
    firstName:  string;
    lastName:   string;
    email:      string;
    telephone:  string | number;
    message:    string;
}

export class Contact {
    firstName:  string;
    lastName:   string;
    email:      string;
    telephone:  string | number;
    message:    string;
    constructor(){
        this.firstName =    '';
        this.lastName =     '';
        this.email =        '';
        this.telephone =    '';
        this.message =      '';    
    }
}