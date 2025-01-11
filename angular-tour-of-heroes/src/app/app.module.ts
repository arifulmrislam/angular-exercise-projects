import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent, // Declare components
        HeroesComponent, // Declare components
        HeroDetailComponent,
        MessagesComponent,
        DashboardComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AppRoutingModule, // Import FormsModule here
        RouterModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
