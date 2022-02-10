import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EntityDataModule } from '@ngrx/data';

import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
import { AboutComponent } from './about.component';
import { declarables } from './core';
import { routes } from './router';
import { HomeComponent } from './home/home.component';
import { PoModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [AppComponent, AboutComponent, declarables, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppStoreModule,
    EntityDataModule,
    PoModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
