import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiBaseUrl } from 'src/app/utils/constants';

@Component({
  selector: 'app-user-top',
  templateUrl: './user-top.page.html',
  styleUrls: ['./user-top.page.scss'],
})
export class UserTopPage implements OnInit {
  favs = [];
  username = localStorage.getItem('username');
  
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    console.log(this.username);
    
    this.http
    .get<any>(
      apiBaseUrl+'users/' +
      this.username +
      '/movies'
      )
      .subscribe((res) => {
        console.log(res);
        this.favs = res;
      });
    }
  }
  