import { Component, OnInit } from '@angular/core';
import {GlobalProvider} from '../../GlobalProvider/global'
import { ContentService } from '../content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-doc',
  templateUrl: './create-doc.component.html',
  styleUrls: ['./create-doc.component.css']
})
export class CreateDocComponent implements OnInit {

  res: any;
  bodyContent : object;
  ckeConfig: any;

  constructor(private router: Router, public global: GlobalProvider,private service: ContentService) { }

  ngOnInit(): void {
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
      console.log(this.global.fileName,"@@@@@@@@@")
      console.log(this.global.fileContent,"########")
      console.log(this.bodyContent)
      this.service
        .updatefile(this.bodyContent)
        .subscribe((res: any) => {
          if (res.code == 200) {
            alert(res.status)
          }
        })
    }
    
    return(){
      this.router.navigate([''])
    }

}
