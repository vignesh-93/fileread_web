import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TexteditorComponent } from './texteditor/texteditor.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentService } from './content.service';
import { GlobalProvider } from 'src/GlobalProvider/global';
import { CreateDocComponent } from './create-doc/create-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    TexteditorComponent,
    SideBarComponent,
    CreateDocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,  
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContentService,GlobalProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
