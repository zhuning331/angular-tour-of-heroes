import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// 判斷環境變數是否為 production
if (environment.production) {
  enableProdMode(); // 啟動 production mode
}

platformBrowserDynamic() // 建立要準備執行 Angular 應用程式的平台 (瀏覽器)
  .bootstrapModule(AppModule) // 指定要啟動的第一個模組，通常是根模組
  .catch(err => console.error(err));
