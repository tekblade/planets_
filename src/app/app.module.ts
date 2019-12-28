import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { RootFiveComponent } from './root-five/root-five.component';
import { FiveComponent } from './five/five.component';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './five/filter.pipe';
import { RootTenComponent } from './root-ten/root-ten.component';
import { TenComponent } from './ten/ten.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent,
    RootFiveComponent,
    FilterPipe,
    FiveComponent,
    RootTenComponent,
    TenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatListModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
