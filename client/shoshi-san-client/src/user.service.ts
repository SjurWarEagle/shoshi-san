import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  fetchUsers(): Promise<any[]|undefined> {
    return this.http.get<any[]>("/users/all").toPromise();
  }

}
