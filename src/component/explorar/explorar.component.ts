import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-explorar',
  standalone: true,
  imports: [NgFor, RouterLink, RouterOutlet,],
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.css']
})
export class ExplorarComponent {
  recommendedBooks: Array<{ image: string, title: string, id: number }> = [
    {
        image: './assets/re.jpg',
        title: 'Reino de Ladrones',
        id: 1 
    },
    {
        image: './assets/so.jpg',
        title: 'La Sombra del Viento',
        id: 2
    },
    {
        image: './assets/ma.jpg',
        title: 'The Magicians',
        id: 3 
    },
  ];

  popularBooks: Array<{ image: string, title: string, id: number }> = [
    {
        image: './assets/re.jpg',
        title: 'Reino de Ladrones',
        id: 4 
    },
    {
        image: './assets/so.jpg',
        title: 'La Sombra del Viento',
        id: 5 
    },
    {
        image: './assets/ma.jpg',
        title: 'The Magicians',
        id: 6 
    }
  ];
}
