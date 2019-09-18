import { Component, OnInit } from '@angular/core';
import {Fruit} from '../fruit';
import {FruitService} from '../fruit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  model: Fruit = { id: 0, name: '' , price : 0, production_place: '', compony: ''};
  constructor(private service: FruitService,  private router: Router) { }

  ngOnInit() {
  }
  addFruit() {
    this.service.addFruit(this.model).subscribe(data => {
      this.router.navigateByUrl('/fruits');
    });
  }

}
