import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-tennis',
  standalone: true,
  imports: [],
  templateUrl: './tennis.component.html',
  styleUrl: './tennis.component.css'
})
export class TennisComponent implements OnInit {

  tennisList:any
  constructor(private httpService:HttpService){

  }

  ngOnInit(): void {
    this.getCricketData();
  }

  //Get cricket Data

  getCricketData() {
    const url = 'https://ag.bet36.live/api-V2/getTomorrowGames';
    this.httpService.fetchSportsData(url, '').subscribe({
      next: ((response: any) => {
        this.tennisList = response;
      }),
      error: ((error: any) => {
        alert(error);
      })
    })
  }

}
