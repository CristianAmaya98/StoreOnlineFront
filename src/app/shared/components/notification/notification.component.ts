import { Component, Input } from '@angular/core';
import { notificationType } from 'src/app/storeonline.const';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {



  public get notification(): any {
    return notificationType;
  }

  @Input() title: string = '';
  @Input() message: string = '';
  @Input() typeNotification: string = notificationType.ERROR;



}
