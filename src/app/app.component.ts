import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

// 透過裝飾器 (decorator) 來定義 Metadata 物件
@Component({
  selector: 'app-root', // 選擇器
  templateUrl: './app.component.html', // 元件網頁樣板
  styleUrls: ['./app.component.css'] // 元件 CSS 樣式
})
export class AppComponent { // TypeScript 類別
  title = 'Tour of Heroes'; // 類別中的屬性 (property)

  constructor(private translateService: TranslateService) {
  }

  onChangeLang(lang: string): void {
    this.translateService.use(lang);
  }
}
