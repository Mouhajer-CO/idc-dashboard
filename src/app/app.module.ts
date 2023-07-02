import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SpinnerComponent } from './shared/spinner.component';
import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { FullComponent } from './layouts/full/full.component';

@NgModule({
  declarations: [
    AppComponent,

    SpinnerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,

    FullComponent,
    NavigationComponent,
    SidebarComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
