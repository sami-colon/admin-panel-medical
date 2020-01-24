import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import {BasicService} from './basic.service';
import {ChartsModule} from 'ng2-charts';

import {DayOfWeek} from './dayofweek.pipe';
import { NewSchemeComponent } from './new-scheme/new-scheme.component';
import { ThoughtComponent } from './thought/thought.component';
import { GraphComponent } from './graph/graph.component';
import { UpdateSchemeComponent } from './update-scheme/update-scheme.component';
import { AddEventsComponent } from './add-events/add-events.component';
import { HelpingHandComponent } from './helping-hand/helping-hand.component';
import { NotificationComponent } from './notification/notification.component';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: 'home',
    component: MainPanelComponent
  },
  {
    path: 'update-scheme',
    component: UpdateSchemeComponent
  },
  {
    path: 'new-scheme',
    component: NewSchemeComponent
  },
  {
    path: 'add-events',
    component: AddEventsComponent
  },
  {
    path: 'helping-hand',
    component: HelpingHandComponent
  },
  {
    path: 'notifications',
    component: NotificationComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: MainPanelComponent }
];




@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    NavigationComponent,
    MainPanelComponent,
    DayOfWeek,
    NewSchemeComponent,
    ThoughtComponent,
    GraphComponent,
    UpdateSchemeComponent,
    AddEventsComponent,
    HelpingHandComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    ),
    FormsModule,
    HttpClientModule
  ],
  providers: [BasicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
