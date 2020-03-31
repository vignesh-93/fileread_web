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
  

  // bodyContent = {
  //   a : this.global.fileName,
  //   b : this.global.fileContent
  // }

  onSubmit() {
    // console.log(this.global.fileName,"@@@@@@@@@")
    // console.log(this.global.fileContent,"########")
    // console.log(this.bodyContent)
    // this.service
    //   .updatefile(this.bodyContent)
    //   .subscribe((res: any) => {
    //     if (res.code == 200) {
    //       console.log("sucs")
    //     }
    //   })
  }

}
