import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ChooseUserComponent } from './components/choose-user/choose-user.component';
import { SearchVideoComponent } from './components/search-video/search-video.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { WatchingComponent } from './components/watching/watching.component';
import { MesPlaylistComponent } from './components/mes-playlist/mes-playlist.component';

const routes: Routes = [
  { path: 'login', component: FirstPageComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'choose', component: ChooseUserComponent},
  { path: 'search', component: SearchVideoComponent},
  { path: 'result', component: SearchResultComponent},
  { path: 'watching', component: WatchingComponent},
  { path: 'playlists', component: MesPlaylistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
