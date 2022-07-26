import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

  page: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.paramMap.get('page');
  }

}
