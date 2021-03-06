import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Book} from '../data.modal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  arr:Book[]=[];

  constructor(private obj:DataService) {
    
  }

  ngOnInit() {
    this.arr=this.obj.books;
  }

}
