import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClientModule} from "@angular/common/http";
import {AsyncPipe, CommonModule, NgIf} from "@angular/common";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClientModule, NgIf, AsyncPipe, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
  public users: BehaviorSubject<any[]|undefined>=new BehaviorSubject<any[]|undefined>([]);

  constructor(private userService: UserService) {
  }

  async ngOnInit(): Promise<void> {
        this.users.next(await this.userService.fetchUsers());
    }


}
