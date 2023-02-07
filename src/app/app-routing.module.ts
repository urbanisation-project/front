import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ChooseUserComponent } from './components/choose-user/choose-user.component';
import { SearchVideoComponent } from './components/search-video/search-video.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { WatchingComponent } from './components/watching/watching.component';
import { MesPlaylistComponent } from './components/mes-playlist/mes-playlist.component';
import { AddToPlaylistComponent } from './components/add-to-playlist/add-to-playlist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CampagnesComponent } from './components/campagnes/campagnes.component';
import { CreateCampagneComponent } from './components/create-campagne/create-campagne.component';
import { AdsetComponent } from './components/adset/adset.component';
import { CreateAdsetComponent } from './components/create-adset/create-adset.component';
import { AdsComponent } from './components/ads/ads.component';
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { LoginComponent } from './components/advertiser/login/login.component';
import { ProfileAdvertiserComponent } from './components/advertiser/profile/profile.component';
import { SignUpAdvertiserComponent } from './components/advertiser/sign-up/sign-up.component';
import { UpdateCampaignComponent } from './components/update-campaign/update-campaign.component';
import { UpdateAdsetComponent } from './components/update-adset/update-adset.component';
import {ViewAdComponent} from "./components/view-add/view-add.component";
import {ChangePasswordComponent} from "./components/advertiser/change-password/change-password.component";
import {ChangeUserPasswordComponent} from "./components/change-user-password/change-user-password.component";

const routes: Routes = [
  { path: '', redirectTo: '/choose', pathMatch: 'full'},
  { path: 'user-login', component: FirstPageComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'choose', component: ChooseUserComponent},
  { path: 'search', component: SearchVideoComponent},
  { path: 'result', component: SearchResultComponent},
  { path: 'watching', component: WatchingComponent},
  { path: 'playlists', component: MesPlaylistComponent},
  { path: 'add-to-playlist', component: AddToPlaylistComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'campagnes', component: CampagnesComponent},
  { path: 'create-campagne', component: CreateCampagneComponent},
  { path: 'adsets', component: AdsetComponent},
  { path: 'create-adset', component: CreateAdsetComponent},
  { path: 'ads', component: AdsComponent},
  { path: 'create-ad', component: CreateAdComponent},
  { path: 'advertiser-login', component: LoginComponent},
  { path: 'advertiser-profile', component: ProfileAdvertiserComponent},
  { path: 'advertiser-register', component: SignUpAdvertiserComponent },
  { path: 'update-campaign', component: UpdateCampaignComponent },
  { path: 'update-adset', component: UpdateAdsetComponent },
  { path: 'view-ad', component: ViewAdComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'change-user-password', component: ChangeUserPasswordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
