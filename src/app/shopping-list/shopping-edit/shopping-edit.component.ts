import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputReference: ElementRef;
  @ViewChild('amountInput') amountInputReference: ElementRef;
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem () {
    const newIng = new Ingredient(this.nameInputReference.nativeElement.value, this.amountInputReference.nativeElement.value);
    this.shoppingListService.addIngredient(newIng);
  }

}
