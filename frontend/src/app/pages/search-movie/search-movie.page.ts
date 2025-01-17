import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiBaseUrl } from 'src/app/utils/constants';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.page.html',
  styleUrls: ['./search-movie.page.scss'],
})
export class SearchMoviePage implements OnInit {
  searchTerm: string;
  movieS = [];
  moreMovies = [];
  
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.http
    .get<any>(apiBaseUrl+'movies/')
    .subscribe((res) => {
      this.movieS = res;
    });
  }
  
  addMovies() {
    const searchTerm = this.searchTerm;
    
    console.log('this is working');
    
    this.http
    .get<any>(
      apiBaseUrl+'movies/' + this.searchTerm
      )
      .subscribe((res) => {
        this.moreMovies = res;
        console.log(this.moreMovies);
        window.location.reload();
      });
    }
  }
  