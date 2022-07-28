import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/services/api.service';
import { ToastService } from 'src/app/services/toast.service';
import { AppState } from 'src/store/AppState';
import { hide, show } from 'src/store/loading/loading.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  latestMovie: any;

  constructor(
    private toast: ToastService,
    private apiService: ApiService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.getLatestMovie(null);
  }

  getLatestMovie(event) {
    this.store.dispatch(show());
    this.apiService.getLatestMovie().subscribe(
      movie => {
        this.toast.success('Last movie up to date.');
        this.latestMovie = movie;
        this.store.dispatch(hide());
        event?.target.complete();
      },
      error => {
        this.toast.error('Something wrong happend.');
        console.error(error);
        event?.target.complete();
      }
    );
  }

}
