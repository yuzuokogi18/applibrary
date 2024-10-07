import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { ExplorarComponent } from "../explorar/explorar.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HomeComponent, HeaderComponent, ExplorarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
