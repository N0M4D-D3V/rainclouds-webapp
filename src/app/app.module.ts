import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContentComponent } from "./components/content/content.component";
import { CarouselComponent } from "./components/content/carousel/carousel.component";
import { CatalogComponent } from "./components/content/catalog/catalog.component";
import { GaleryComponent } from "./components/content/galery/galery.component";
import { MusicModalComponent } from "./components/modals/music-modal/music-modal.component";
import { ArtModalComponent } from "./components/modals/art-modal/art-modal.component";
import { ContactModalComponent } from "./components/modals/contact-modal/contact-modal.component";
import { PlayOrBuyComponent } from "./components/modals/play-or-buy/play-or-buy.component";
import { ProductionComponent } from "./components/modals/production/production.component";
import { SentencesComponent } from "./components/content/sentences/sentences.component";

// Firebase
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Material
import { MatCarouselModule } from "@ngmodule/material-carousel";
import { MatDialogModule } from "@angular/material";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CarouselComponent,
    CatalogComponent,
    GaleryComponent,
    SentencesComponent,
    MusicModalComponent,
    ArtModalComponent,
    ContactModalComponent,
    PlayOrBuyComponent,
    ProductionComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule,
    BrowserAnimationsModule, // Only required for storage features
    MatCarouselModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    MusicModalComponent,
    ArtModalComponent,
    ContactModalComponent,
    PlayOrBuyComponent,
    ProductionComponent,
  ],
})
export class AppModule {}
