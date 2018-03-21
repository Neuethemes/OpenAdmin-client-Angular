import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';
// Plugins
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    AuthModule,
    MainModule,
    AppRoutingModule,
    // Plugins
    ChartsModule,
    NgbModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
