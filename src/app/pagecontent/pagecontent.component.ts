import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagecontent',
  templateUrl: './pagecontent.component.html',
  styleUrls: ['./pagecontent.component.css']
})
export class PagecontentComponent implements OnInit {
  name = 'ng2-ckeditor';    
  
    ckeConfig: any;    
  
     mycontent: string;    
  
    log: string   
  
    @ViewChild('PageContent') PageContent: any;    
  
    res: any;    
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    
    this.ckeConfig = {    
      
            allowedContent: false,    
      
            extraPlugins: 'divarea',    
      
            forcePasteAsPlainText: true    
      
          };
  }

  GetcontentById(){

  }
}

  

     

  
