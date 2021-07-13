import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

//FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//MATERIAL
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//ENVIROMENT
import { environment } from '../environments/environment.prod';

//PIPES
import { FilterPipe } from './common/pipes/search.pipe';

//MODALS
import { ArtModalComponent } from './components/shared/modals/art-modal/art-modal.component';
import { ContactModalComponent } from './components/shared/modals/contact-modal/contact-modal.component';
import { MusicModalComponent } from './components/shared/modals/music-modal/music-modal.component';
import { PlayOrBuyComponent } from './components/shared/modals/play-or-buy/play-or-buy.component';
import { ProductionModalComponent } from './components/shared/modals/production-modal/production-modal.component';
import { MailModalComponent } from './components/shared/modals/mail-modal/mail-modal.component';

//COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogComponent } from './components/content/catalog/catalog.component';
import { GaleryComponent } from './components/content/galery/galery.component';
import { HomeComponent } from './components/content/home/home.component';
import { AboutComponent } from './components/content/about/about.component';
import { LyricsComponent } from './components/content/lyrics/lyrics.component';
import { BannerComponent } from './components/shared/banner/banner.component';

//DIRECTIVES
import { DirectivesModule } from './directives/directives.module';
import { SharedComponentsModule } from './components/shared/components/shared-components.module';
import { SpinnerModule } from './components/shared/components/spinner/spinner.module';

@NgModule({
  declarations: [
    AppComponent,
    ArtModalComponent,
    ContactModalComponent,
    MusicModalComponent,
    PlayOrBuyComponent,
    ProductionModalComponent,
    MailModalComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    GaleryComponent,
    HomeComponent,
    LyricsComponent,
    AboutComponent,
    BannerComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    DirectivesModule,
    SharedComponentsModule,
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent],
  entryComponents: [
    ArtModalComponent,
    ContactModalComponent,
    MusicModalComponent,
    PlayOrBuyComponent,
    ProductionModalComponent,
    MailModalComponent,
  ],
})
export class AppModule {}
