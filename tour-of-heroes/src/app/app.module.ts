import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeroComponent} from './hero/hero.component';
import {HeroBadgeComponent} from './hero-badge/hero-badge.component';
import {TitleComponent} from './title/title.component';
import {HeroesContainerComponent} from './heroes-container/heroes-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroBadgeComponent,
    TitleComponent,
    HeroesContainerComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: DashboardComponent
    }, {
      path: 'heroes',
      component: HeroesContainerComponent
    }])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
