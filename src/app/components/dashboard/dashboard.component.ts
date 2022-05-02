import { CoinronService } from './../../shared/services/coinron.service';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService, public coinronService: CoinronService) { }

  ngOnInit(): void {
    this.coinronService.getHello().subscribe(d => {
      console.log(d);
    })
  }

}
