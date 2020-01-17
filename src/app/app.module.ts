import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import {BasicService} from './basic.service';

import {DayOfWeek} from './dayofweek.pipe';
import { NewSchemeComponent } from './new-scheme/new-scheme.component';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    NavigationComponent,
    MainPanelComponent,
    DayOfWeek,
    NewSchemeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [BasicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
