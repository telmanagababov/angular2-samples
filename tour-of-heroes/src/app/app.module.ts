import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroBadgeComponent} from './hero-badge/hero-badge.component';
import {TitleComponent} from './title/title.component';
import {HeroesContainerComponent} from './heroes-container/heroes-container.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app.routing.module';
import {HeroService} from './service/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    TitleComponent,
    HeroBadgeComponent,
    HeroDetailComponent,
    HeroesContainerComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
