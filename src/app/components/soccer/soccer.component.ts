import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-soccer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './soccer.component.html',
  styleUrl: './soccer.component.css'
})
export class SoccerComponent implements OnInit {

  soccerList:any
  constructor(private httpService:HttpService){

  }

  ngOnInit(): void {
    this.getSoccerDatData();
  }

  //Get cricket Data

  getSoccerDatData() {
    const url = 'https://ag.bet36.live/api-V2/getTodayGames';
    this.httpService.fetchSportsData(url, '').subscribe({
      next: ((response: any) => {
        this.soccerList = response;

        
      }),
      error: ((error: any) => {
        alert(error);
      })
    })
  }



}
