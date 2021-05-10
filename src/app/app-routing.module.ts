import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'new', component: HeroDetailComponent }
]; // 定義 URL 給瀏覽器查詢

@NgModule({
  imports: [RouterModule.forRoot(routes)], // 將定義好的路由設定給初始化
  exports: [RouterModule]
})
export class AppRoutingModule { }
