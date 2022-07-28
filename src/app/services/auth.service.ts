import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/model/User';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService
  ) { }

  login(username: string, password: string): Observable<User> {
    return new Observable<User>(observer => {
      this.apiService.getToken().subscribe(
        (requestTokenBody: any) => {
          requestTokenBody.username = username;
          requestTokenBody.password = password;
          this.apiService.getSessionId(requestTokenBody).subscribe(
            (data: any) => {
              const user = new User();
              user.username = data.username;
              user.password = data.password;
              observer.next(user);
              observer.complete();
            },
            error => observer.error(error)
          );
        },
        error => observer.error(error)
      );
    });
  }
}
