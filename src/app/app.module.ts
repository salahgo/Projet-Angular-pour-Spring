import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddlivreComponent } from './components/add-livre/add-livre.component';
import { livreDetailsComponent } from './components/livre-details/livre-details.component';
import { livresListComponent } from './components/livres-list/livres-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddlivreComponent,
    livreDetailsComponent,
    livresListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
