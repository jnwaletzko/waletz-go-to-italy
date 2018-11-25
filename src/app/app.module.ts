import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItineraryComponent } from './tuscany/itinerary/itinerary.component';
import { JumbotronComponent } from './tuscany/jumbotron/jumbotron.component';
import { AppRoutingModule } from './app-routing.module';
import { TuscanyComponent } from './tuscany/tuscany.component';
import { MinnesotaComponent } from './minnesota/minnesota.component';
import { RegistryComponent } from './registry/registry.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItineraryComponent,
    JumbotronComponent,
    TuscanyComponent,
    MinnesotaComponent,
    RegistryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
