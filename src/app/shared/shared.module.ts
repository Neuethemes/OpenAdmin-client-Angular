import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoComponent } from './components/logo/logo.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProgressListComponent } from './components/progress-list/progress-list.component';
import { StatComponent } from './components/stat/stat.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { WidgetComponent } from './components/widget/widget.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    LogoComponent,
    MessagesComponent,
    ProgressListComponent,
    StatComponent,
    TasksComponent,
    WidgetComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ChartsModule
  ],
  exports: [
    LogoComponent,
    MessagesComponent,
    ProgressListComponent,
    StatComponent,
    TasksComponent,
    WidgetComponent
  ]
})
export class SharedModule {
}
