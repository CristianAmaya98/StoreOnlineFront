import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { buttonActions } from 'src/app/storeonline.const';


@Component({
  selector: 'app-buttons-actions',
  templateUrl: './buttons-actions.component.html',
  styleUrls: ['./buttons-actions.component.css']
})
export class ButtonsActionsComponent implements OnInit {


  @Input() buttons: any[] = [];
  @Output() onActionButton: EventEmitter<string> = new EventEmitter<string>();





  constructor() { }

  ngOnInit(): void {
  }


  eventButton(eventButton: any) {
    this.onActionButton.emit(eventButton);
  }
}
