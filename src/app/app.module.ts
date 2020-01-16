import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainPanelComponent } from './main-panel/main-panel.component';

import {DayOfWeek} from './dayofweek.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    NavigationComponent,
    MainPanelComponent,
    DayOfWeek,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
