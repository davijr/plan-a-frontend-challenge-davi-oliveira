import { Component, Input, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoListComponent implements OnInit {

  @Input() movie: any = {};

  constructor() { }

  ngOnInit() {}

  async goToHomepage(homepage: string) {
    if (homepage) {
      await Browser.open({ url: homepage });
    }
  }

}
