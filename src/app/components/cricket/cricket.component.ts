import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cricket',
  standalone: true,
  imports: [MatExpansionModule,NgFor],
  templateUrl: './cricket.component.html',
  styleUrl: './cricket.component.css'
})
export class CricketComponent implements OnInit {
  cricketList: any;
  readonly panelOpenState = signal(false);

  constructor(private httpService: HttpService,private router:Router) {

  }
  ngOnInit(): void {
    this.getCricketData();
  }

  //Get cricket Data

  getCricketData() {
    const url = 'https://ag.bet36.live/api-V2/getInPlayGames';
    this.httpService.fetchSportsData(url, '').subscribe({
      next: ((response: any) => {
        this.cricketList = response;
      }),
      error: ((error: any) => {
        alert(error);
      })
    })
  }

  getTodayData(){
    this.router.navigate(['soccer'])
  }
  getTomorrowData(){
    this.router.navigate(['tennis'])
  }
}
