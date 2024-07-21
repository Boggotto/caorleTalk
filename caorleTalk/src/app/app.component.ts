import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { RouterModule } from '@angular/router';
import { ContattiComponent } from './components/contatti/contatti.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        RouterModule,
        HomeComponent,
        ContattiComponent,
        HeaderComponent,
        FooterComponent
    ]
})
export class AppComponent {
  title = 'caorleTalk';
}
