export class MyMovies
{
    title :string='';
    category:string='';
    isRunning:boolean=false;
    language:string='';

    constructor(mtitle:string, mcategory:string, misRunning:boolean, mlanguage:string)
    {
        this.title=mtitle;
        this.category=mcategory;
        this.isRunning=misRunning;
        this.language=mlanguage;
    }
} 
