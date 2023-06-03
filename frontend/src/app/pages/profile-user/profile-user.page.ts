import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { apiBaseUrl } from 'src/app/utils/constants';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.page.html',
  styleUrls: ['./profile-user.page.scss'],
})
export class ProfileUserPage implements OnInit {
  
  people = [];
  data;
  username = localStorage.getItem('username');
  
  constructor(
    private route: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
    ) {}
    
    ngOnInit() {
      this.http
      .get<any>(
        apiBaseUrl+'users/' + this.username
        )
        .subscribe((res) => {
          console.log(res);
          this.data = res;
          this.people = res.people;
        });
      }
    }
    