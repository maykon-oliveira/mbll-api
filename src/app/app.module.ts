import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HeroDetailComponent } from './core/components/hero-detail/hero-detail.component';
import { HeroItemComponent } from './core/components/hero-item/hero-item.component';
import { HeroListComponent } from './core/components/hero-list/hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    HeroListComponent,
    HeroItemComponent,
    HeroDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
