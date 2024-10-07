import { Component } from '@angular/core';
import { FantasiaComponent } from "../fantasia/fantasia.component";

@Component({
  selector: 'app-noficcion',
  standalone: true,
  imports: [FantasiaComponent],
  templateUrl: './noficcion.component.html',
  styleUrl: './noficcion.component.css'
})
export class NoficcionComponent {

}
