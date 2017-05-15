
export interface iBlog{
    title: string;
    blogImage: string;
    postdate: Date;
    body: iBody[];
}
export interface iBody{

    header: string;
    paragraph: string;
 
}