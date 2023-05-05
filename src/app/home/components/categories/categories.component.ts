import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {


  @Input() categories: string[] = [];
  @Output() onCategorySelect: EventEmitter<string> = new EventEmitter<string>();
  selectCategory: number = 0;


  onCategory(position: number, category: string) {
    this.selectCategory = position;
    this.onCategorySelect.emit(category);
  }

  verifySelectCategory(position: number) {
    return this.selectCategory === position;
  }
}
