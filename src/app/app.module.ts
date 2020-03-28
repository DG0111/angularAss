import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './components/admin-layout/admin-layout.component';
import {MotelsComponent} from './components/motels/motels.component';
import {MotelService} from './motel.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          {
            path: '',
            component: MotelsComponent,
          }
        ]
      }
    ])
  ],
  providers: [MotelService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
