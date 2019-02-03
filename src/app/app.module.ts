import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { MenuProfileInfoComponent } from './menu-profile-info/menu-profile-info.component';
import { MenuFooterButtonsComponent } from './menu-footer-buttons/menu-footer-buttons.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NavbarTitleComponent } from './navbar-title/navbar-title.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopNavigationComponent,
    MenuProfileInfoComponent,
    MenuFooterButtonsComponent,
    FooterComponent,
    ContentComponent,
    NavbarTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
