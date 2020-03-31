import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Content } from '../content';

@Component({
  selector: 'app-texteditor',
  templateUrl: './texteditor.component.html',
  styleUrls: ['./texteditor.component.css']
})
export class TexteditorComponent implements OnInit {
  name = 'ng2-ckeditor';    
  
    ckeConfig: any;    
  
     mycontent: string;    
  
    log: string   
  
    @ViewChild('PageContent') PageContent: any;    
  
    res: any;  

  constructor(private router: Router) { }    
  contentdata=new Content();

  ngOnInit(): void {
    // this.Getcontent()    
    
        this.ckeConfig = {    
    
          allowedContent: false,    
    
          extraPlugins: 'divarea',    
    
          forcePasteAsPlainText: true    
    
        };   
  }

  onSubmit(){
    this.router.navigate(['/Post']);    

  }    

  
}
