import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SubscriberListeComponent } from './components/subscriber-liste/subscriber-liste.component';
import { HomeComponent } from './components/home/home.component';
import { SusbcriberAddComponent } from './components/susbcriber-add/susbcriber-add.component';
import { SubscriberUpdateComponent } from './components/subscriber-update/subscriber-update.component';
import { SusbcriberDatailsComponent } from './components/susbcriber-datails/susbcriber-datails.component';


@NgModule({
  declarations: [
    AppComponent,
    SubscriberListeComponent,
    HomeComponent,
    SusbcriberAddComponent,
    SubscriberUpdateComponent,
    SusbcriberDatailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
