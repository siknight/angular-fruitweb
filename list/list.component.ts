import { Component, OnInit } from '@angular/core';
import {FruitService} from '../fruit.service';
import {Fruit} from '../fruit';
import {element} from 'protractor';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private fruits: Fruit[] = [];
  private allselected = false;
  selectedFruits: Fruit[] = [];

  constructor(private service: FruitService) { }


  ngOnInit() {
    this.service.getFruits().subscribe(data => console.log(data));

    // @ts-ignore
    this.service.getFruits().subscribe( data => this.fruits = data);
  }

  // selected(book) {
  //   console.log(this.fruits);
  // }
  selectAll() {
    this.allselected = !this.allselected;
    this.selectedFruits = this.allselected ? this.fruits : [];
  }


  select(fruit: Fruit) {
    const selected = this.isSelected(fruit);
    if (selected) {
        const  i = this.selectedFruits.indexOf(fruit);
        this.selectedFruits.splice(i, 1);
    } else {
      this.selectedFruits.push(fruit);
    }
    this.allselected = this.selectedFruits.length === this.fruits.length;
  }


  isSelected(fruit) {
    return this.selectedFruits.some( element =>  element.id === fruit.id);
  }
  deleteSeletedFruits() {
    //   this.selectedBooks.forEach(fruit => {
    //     const  index = this.fruits.indexOf(fruit);
    //     this.fruits.splice(index, 1);
    //     this.service.deleteBook(fruit.id).subscribe();
    // });
    this.selectedFruits.forEach(fruit => {
      this.deleteFruit(fruit);
    });
  }

  deleteFruit(fruit: Fruit) {
    // delete from all books
    let index = this.fruits.indexOf(fruit);
    this.fruits.splice(index, 1);

    // delete from selected books
    index = this.selectedFruits.indexOf(fruit);
    this.selectedFruits.splice(index, 1);

    this.service.deleteBook(fruit.id).subscribe();
  }
}
