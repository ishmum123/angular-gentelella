import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {TopNavigationComponent} from './components/top-navigation/top-navigation.component';
import {MenuProfileInfoComponent} from './components/menu-profile-info/menu-profile-info.component';
import {MenuFooterButtonsComponent} from './components/menu-footer-buttons/menu-footer-buttons.component';
import {FooterComponent} from './components/footer/footer.component';
import {ContentComponent} from './components/content/content.component';
import {NavbarTitleComponent} from './components/navbar-title/navbar-title.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component: ContentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopNavigationComponent,
    MenuProfileInfoComponent,
    MenuFooterButtonsComponent,
    FooterComponent,
    ContentComponent,
    NavbarTitleComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
