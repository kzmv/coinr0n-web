import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { switchMap,  from } from 'rxjs';
import { baseBackendUrl } from '../utils';

@Component({
  selector: 'app-auth-redirect',
  templateUrl: './auth-redirect.component.html',
  styleUrls: ['./auth-redirect.component.scss']
})
export class AuthRedirectComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    const code = this.route.snapshot.queryParamMap.get('code');
    if(code) {
      console.log(code);
      const url = `${baseBackendUrl}/token?code=${code}`
      this.http.get(url).pipe(
        // switchMap((res: any) => from(this.auth.customSignIn(res.authToken)))
      ).subscribe(d => {
        console.log(d);
      })
    }
  }

}
