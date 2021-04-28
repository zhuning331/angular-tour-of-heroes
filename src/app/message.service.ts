import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) { // 新增一則訊息
    this.messages.push(message);
  }

  clear() { // 清空訊息
    this.messages = [];
  }
}
