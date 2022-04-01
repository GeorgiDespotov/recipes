import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from 'src/app/shared/interfaces/user';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserService {

  user: Iuser | null | undefined = undefined;


  constructor(private http: HttpClient) { }

  register(data: { username: string; email: string; tel: string; password: string }) {
    // this.loged = true;
    return this.http.post<Iuser>(`/api/register`, data)
      .pipe(
        tap((user) => this.user = user)
      );
  }
}
