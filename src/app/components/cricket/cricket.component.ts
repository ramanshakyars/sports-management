import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cricket',
  standalone: true,
  imports: [MatExpansionModule, NgFor,NgIf],
  templateUrl: './cricket.component.html',
  styleUrl: './cricket.component.css'
})
export class CricketComponent implements OnInit {
  inPlayList: any;
  todaySportsList: any;
  tomorrowSportsList: any;
  sports = ['Soccer', 'Cricket', 'Tennis'];
  constructor(private httpService: HttpService, private router: Router) {

  }
  ngOnInit(): void {
    this.getInPlayData();
  }

  //Get cricket Data

  getInPlayData() {
    const url = 'https://ag.bet36.live/api-V2/getInPlayGames';
    this.httpService.fetchSportsData(url, '').subscribe({
      next: ((response: any) => {
        this.inPlayList = this.groupBySport(response);
      }),
      error: ((error: any) => {
        alert(error);
      })
    })
  }

  // get today data
  getTodayData() {
    const url = 'https://ag.bet36.live/api-V2/getTodayGames';
    this.httpService.fetchSportsData(url, '').subscribe({
      next: ((response: any) => {
        this.todaySportsList =  this.groupBySport(response);
      }),
      error: ((error: any) => {
        alert(error);
      })
    })
  }

  // get tomorrow data

  getTomorrowData() {
    const url = 'https://ag.bet36.live/api-V2/getTomorrowGames';
    this.httpService.fetchSportsData(url, '').subscribe({
      next: ((response: any) => {
        this.tomorrowSportsList =  this.groupBySport(response);
      }),
      error: ((error: any) => {
        alert(error);
      })
    })
  }

  groupBySport(matches: any[]): any[] {
    return matches.map(match => {
      let category = '';
      switch (match.sportid) {
        case 1:
          category = 'Soccer';
          break;
        case 4:
          category = 'Cricket';
          break;
        case 2:
          category = 'Tennis';
          break;
        default:
          category = 'Unknown Sport';
      }
      return { ...match, category };
    });
  }

  filterMatchesBySport(matches: any[], sport: string): any[] {
    return matches?.filter(match => match.category === sport);
  }


}
