import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-info-list',
  templateUrl: './movie-info-list.component.html',
  styleUrls: ['./movie-info-list.component.scss'],
})
export class MovieInfoListComponent implements OnInit {

  @Input() movieList = [];

  constructor() { }

  ngOnInit() {}

}
