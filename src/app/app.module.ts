import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { GridDashboardComponent } from './components/grid-dashboard/grid-dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthService } from './shared/services/auth.service';
import { CoinronService } from './shared/services/coinron.service';

const firebaseConfig = {
  apiKey: 'AIzaSyCVQM6p15mCz1nFxFV3fr3YG089vsKkVVA',
  authDomain: 'coinr0n.firebaseapp.com',
  projectId: 'coinr0n',
  storageBucket: 'coinr0n.appspot.com',
  messagingSenderId: '613682193811',
  appId: '1:613682193811:web:9b88f7b77d0e7b76533466',
  measurementId: 'G-0YRQ6YDEF4',
};

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    GridDashboardComponent,
    UserProfileComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [AuthService, CoinronService],
  bootstrap: [AppComponent],
})
export class AppModule {}
