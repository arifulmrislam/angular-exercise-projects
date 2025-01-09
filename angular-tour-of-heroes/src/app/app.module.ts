import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
    declarations: [
        AppComponent, // Declare components
        HeroesComponent, // Declare components
        HeroDetailComponent,
        MessagesComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule, // Import FormsModule here
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
