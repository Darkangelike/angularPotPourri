import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region } from '../models/region';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css'],
})
export class RegionsComponent implements OnInit {
  public searchType!: string;
  tabRegions: Region[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  sendRequest() {
    this.http
      .get('https://geo.api.gouv.fr/' + this.searchType)
      .toPromise()
      .then((data) => {
        this.tabRegions = data as Region[];
      });
  }
}
