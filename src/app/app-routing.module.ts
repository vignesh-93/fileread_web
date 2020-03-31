import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagecontentComponent } from './pagecontent/pagecontent.component';  

  

import { DetailspostComponent } from './detailspost/detailspost.component';  
import { TexteditorComponent } from './texteditor/texteditor.component';

const routes: Routes = [
     { path: '', component: TexteditorComponent },  
  
    { path: 'Post', component: PagecontentComponent },  
  
    { path: 'Details', component: DetailspostComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
