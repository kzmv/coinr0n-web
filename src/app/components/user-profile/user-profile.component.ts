import { CoinronService } from './../../shared/services/coinron.service';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public authService: AuthService, public coinronService: CoinronService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  async open(content: any) {
    const result = await this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
