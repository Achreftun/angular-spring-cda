import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SenderMessage } from '../models/sender-message';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private subject = new Subject<SenderMessage>()
  envoyerNotification(sm: SenderMessage) {
    this.subject.next(sm)
  }
  accederNotification() {
    return this.subject
  }
}
