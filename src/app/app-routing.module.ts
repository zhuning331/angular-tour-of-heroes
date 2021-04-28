import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = []; // 定義 URL 給瀏覽器查詢

@NgModule({
  imports: [RouterModule.forRoot(routes)], // 將定義好的路由設定給初始化
  exports: [RouterModule]
})
export class AppRoutingModule { }
