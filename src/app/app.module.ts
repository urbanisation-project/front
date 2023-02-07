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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from 'api.module';
import { SearchNavbarComponent } from './components/search-navbar/search-navbar.component';
import { AddToPlaylistComponent } from './components/add-to-playlist/add-to-playlist.component';
import { CreatePlaylistComponent } from './components/create-playlist/create-playlist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarAdComponent } from './components/navbar-ad/navbar-ad.component';
import { CampagnesComponent } from './components/campagnes/campagnes.component';
import { CreateCampagneComponent } from './components/create-campagne/create-campagne.component';
import { AdsetComponent } from './components/adset/adset.component';
import { CreateAdsetComponent } from './components/create-adset/create-adset.component';
import { AdsComponent } from './components/ads/ads.component';
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { LoginComponent } from './components/advertiser/login/login.component';
import { SignUpAdvertiserComponent } from './components/advertiser/sign-up/sign-up.component';
import { ProfileAdvertiserComponent } from './components/advertiser/profile/profile.component';
import { UpdateCampaignComponent } from './components/update-campaign/update-campaign.component';
import { UpdateAdsetComponent } from './components/update-adset/update-adset.component';
import { AdShowComponent } from './components/ad-show/ad-show.component';
import { ViewAdComponent } from './components/view-add/view-add.component';
import { ChangePasswordComponent } from './components/advertiser/change-password/change-password.component';
import { ChangeUserPasswordComponent } from './components/change-user-password/change-user-password.component';

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
    MesPlaylistComponent,
    SearchNavbarComponent,
    AddToPlaylistComponent,
    CreatePlaylistComponent,
    ProfileComponent,
    NavbarAdComponent,
    CampagnesComponent,
    CreateCampagneComponent,
    AdsetComponent,
    CreateAdsetComponent,
    AdsComponent,
    CreateAdComponent,
    LoginComponent,
    SignUpAdvertiserComponent,
    ProfileAdvertiserComponent,
    UpdateCampaignComponent,
    UpdateAdsetComponent,
    AdShowComponent,
    ViewAdComponent,
    ChangePasswordComponent,
    ChangeUserPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ApiModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
