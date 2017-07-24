import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImagebindingComponent } from './src/app/imagebinding/imagebinding.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagebindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
