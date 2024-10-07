import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admini',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './admini.component.html',
  styleUrl: './admini.component.css'
})
export class AdminiComponent {

}
