import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { BrandBoxComponent } from './components/brand-box/brand-box.component';
import {MatButtonModule} from '@angular/material/button';
import { SliderComponent } from './components/slider/slider.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ModelViewerComponent } from './components/model-viewer/model-viewer.component';
import { DownloadButtonComponent } from './components/download-button/download-button.component';
import { TagsComponent } from './components/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CardComponent,
    BrandBoxComponent,
    SliderComponent,
    ModelViewerComponent,
    DownloadButtonComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    NgImageSliderModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
