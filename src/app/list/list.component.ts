import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  tabMovies!: Movie[];
  constructor(public singletonMovies: MoviesService) {
    this.tabMovies = singletonMovies.tabMovies;
  }

  ngOnInit(): void {}
}
