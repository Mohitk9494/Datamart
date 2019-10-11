import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TilesComponent } from './tiles/tiles.component';
import { TermComponent } from './term/term.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HelpComponent } from './help/help.component';
import { OpenFileComponent } from './open-file/open-file.component';
import { PcnsearchComponent } from './pcnsearch/pcnsearch.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ReactiveFormsModule} from '@angular/forms';


import {PartSearchService} from "./service/partSearch.service";

import {MaterialModule} from './material/material.module';
import { PartsearchComponent } from './partsearch/partsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TilesComponent,
    TermComponent,
    PrivacyComponent,
    HelpComponent,
    OpenFileComponent,
    PcnsearchComponent,
    PartsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [PartSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
