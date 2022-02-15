import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRedirectComponent } from './auth-redirect/auth-redirect.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const firebaseConfig = {
  apiKey: "AIzaSyCVQM6p15mCz1nFxFV3fr3YG089vsKkVVA",
  authDomain: "coinr0n.firebaseapp.com",
  projectId: "coinr0n",
  storageBucket: "coinr0n.appspot.com",
  messagingSenderId: "613682193811",
  appId: "1:613682193811:web:9b88f7b77d0e7b76533466",
  measurementId: "G-0YRQ6YDEF4"
};

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    AuthRedirectComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // provideFirebaseApp(()? => initializeApp(firebaseConfig)),
    // provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

