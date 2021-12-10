import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

type DonneesLoginServeur = {
  token: string;
  email: string;
  id: string;
  updatedAt: string;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private api_url =
    'https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/';
  public email = 'isabelle@hb.fr';
  public password = 'michaeng';
  private token!: string;
  public isConnected = false;
  constructor(private http: HttpClient, public user: UserService) {}

  ngOnInit(): void {}

  authenticate() {
    this.user = {
      email: this.email,
      password: this.password,
    };
    this.http
      .post(this.api_url + 'login', JSON.stringify(this.user))
      .toPromise()
      .then(
        (data) => {
          let serverData = data as DonneesLoginServeur;
          this.token = serverData.token;
          this.isConnected = true;
        },
        (err) => {
          console.log(err.status);
        }
      );
    console.log(this.token);
  }
}
