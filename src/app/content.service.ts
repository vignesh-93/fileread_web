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

  showfiles(filename) {
    console.log("test",filename)
    return this.http.get(this.url + '/readfile?name='+ filename + '.txt');
  }

  updatefile(body){
    console.log("test",body)
    return this.http.post(this.url + '/writefile', body);
  }
}
