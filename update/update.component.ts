import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FruitService} from '../fruit.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id = '';
  fruit = {id: 0, name: '', price: 0, production_place: '', compony: ''};
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: FruitService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getFruit(this.id).subscribe(data => this.fruit =  data);
  }

  updateFruit() {
    this.service.updateFruit(this.fruit).subscribe(data => this.router.navigateByUrl('/fruits'));
  }
}
