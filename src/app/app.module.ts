import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ChooseUserComponent } from './components/choose-user/choose-user.component';
import { SearchVideoComponent } from './components/search-video/search-video.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { WatchingComponent } from './components/watching/watching.component';
import { MesPlaylistComponent } from './components/mes-playlist/mes-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstPageComponent,
    SignUpComponent,
    ChooseUserComponent,
    SearchVideoComponent,
    SearchResultComponent,
    WatchingComponent,
    MesPlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
