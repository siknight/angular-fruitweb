import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FruitService} from '../fruit.service';
import {Fruit} from '../fruit';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  id = '';
  fruit: Fruit;
  constructor(private route: ActivatedRoute,
              private service: FruitService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getFruit(this.id).subscribe(data => {this.fruit = data; console.log(this.fruit); });
  }

}
