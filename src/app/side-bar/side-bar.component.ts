import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  files: any;
  trim : any;
  constructor(private service: ContentService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this.service
      .getAllfiles()
      .subscribe((res: any) => {
        if (res.code == 200) {
          console.log(res.files,"#########")
          this.files = res["files"]
        }
      })
  }

}
