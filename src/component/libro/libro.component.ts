import { NgFor, NgIf } from '@angular/common';
import { Component} from '@angular/core';

import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [NgFor, NgIf, HeaderComponent,RouterLink,RouterOutlet],
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {
  
  bookId: number | undefined;
  books = [
    {
      id: 1,
      title: "Reino de Ladrones",
      author: "Alejo Carpentier",
      genre: "Fiction · Magical Realism · Historical Fiction · Classics",
      pageCount: 432,
      description: " Kaz Brekker y su equipo han dado un golpe tan temerario que ni siquiera ellos pensaban sobrevivir. Pero en lugar de conseguir una buena recompensa, a su regreso de la Corte de Hielo tienen que seguir luchando por sus vidas. Traicionado y debilitado, el equipo está corto de recursos, aliados y esperanza..",
      image: './assets/re.jpg'
    },
    {
      id: 2,
      image: './assets/so.jpg',
      title: 'La Sombra del Viento',
      author: "Scott Lynch",
      genre: "Fantasía",
      pageCount: 432,
      description: "Un relato fascinante sobre ladrones y aventuras.",
    },
    {
      id: 3,
      image: './assets/ma.jpg',
      title: 'The Magicians',
      author: "Scott Lynch",
      genre: "Fantasía",
      pageCount: 432,
      description: "Un relato fascinante sobre ladrones y aventuras.",
    },

  ];


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.bookId = +params.get('id')!; 
    });
  }
}
