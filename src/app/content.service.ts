import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  url: any = "http://localhost:8000";

  constructor(private http: HttpClient) { }

  getAllfiles() {
    console.log("test")
    return this.http.get(this.url + '/showfile');
  }

}
