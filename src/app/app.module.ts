import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [ // 定義這個模組會用到的元件、指令及管道
    AppComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent
  ],
  imports: [ // 模組也可透過引入其他模組來使用
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [], // 定義這個模組會依賴注入的服務
  bootstrap: [AppComponent] // 定義根元件，只有根模組才會有
})
export class AppModule { }
