import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Content } from '../content';
import {GlobalProvider} from '../../GlobalProvider/global'
import { ContentService } from '../content.service';

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

  bodyContent : object;

  constructor(private router: Router, public global: GlobalProvider,private service: ContentService) { }
  contentdata = new Content();

  ngOnInit(): void {
    // this.Getcontent()    
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  onSubmit() {  
  this.bodyContent = {
    filename : this.global.fileName,
    content : this.global.fileContent
  }
    // console.log(this.global.fileName,"@@@@@@@@@")
    // console.log(this.global.fileContent,"########")
    // console.log(this.bodyContent)
    this.service
      .updatefile(this.bodyContent)
      .subscribe((res: any) => {
        if (res.code == 200) {
          alert(res.status)
        }
      })
  }

  redirect(){
    this.router.navigate(['newdoc'])
    this.global.fileContent = null
    this.global.fileName = null
  }

}
