import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import {GlobalProvider} from '../../GlobalProvider/global'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  files: any;
  trim : any;
  content : any;

  constructor(private service: ContentService, private global: GlobalProvider) { }

  ngOnInit(): void {
    this.allFiles();
  }

  allFiles() {
    this.service
      .getAllfiles()
      .subscribe((res: any) => {
        if (res.code == 200) {
          console.log(res.files,"#########")
          this.files = res["files"]
        }
      })
  }

  readname(file){
    console.log(file,"#####")
    this.service
      .showfiles(file)
      .subscribe((res: any) => {
        if (res.code == 200) {
          // console.log(res.content,"#########") 
          this.global.fileName = file
          this.global.fileContent = res["content"]
          console.log(this.global.fileContent,"#########")
          console.log(this.global.fileName,"#########")
        }
      })
  }

}
