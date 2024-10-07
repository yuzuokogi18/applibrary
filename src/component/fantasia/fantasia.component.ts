import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-fantasia',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgFor],
  templateUrl: './fantasia.component.html',
  styleUrl: './fantasia.component.css'
})
export class FantasiaComponent {
  filtroEtiqueta: string = '';
  
  etiquetas: string[] = [
    'Magia', 
    'Aventura', 
    'Épico', 
    'Dragones', 
    'Héroes', 
    'Misterio'
  ];

  libros: Array<{ image: string, title: string, descripcion: string }> = [
    {
      image: './assets/h.jpeg',
      title: 'El Hobbit',
      descripcion: 'Una aventura épica en la Tierra Media.'
    },
    {
      image: './assets/ha.jpeg',
      title: 'Harry Potter y la Piedra Filosofal',
      descripcion: 'El inicio de una saga mágica.'
    },
    {
      image: './assets/cr.jpeg',
      title: 'Las Crónicas de Narnia',
      descripcion: 'Un viaje a un mundo mágico lleno de criaturas fantásticas.'
    },
    {
      image: './assets/h.jpeg',
      title: 'El Hobbit',
      descripcion: 'Una aventura épica en la Tierra Media.'
    },
    {
      image: './assets/ha.jpeg',
      title: 'Harry Potter y la Piedra Filosofal',
      descripcion: 'El inicio de una saga mágica.'
    },
    {
      image: './assets/cr.jpeg',
      title: 'Las Crónicas de Narnia',
      descripcion: 'Un viaje a un mundo mágico lleno de criaturas fantásticas.'
    },
  ];

  get librosFiltrados() {
    return this.libros.filter(libro => 
      libro.title.includes(this.filtroEtiqueta) 
    );
  }

  actualizarFiltro(valor: string) {
    this.filtroEtiqueta = valor;
  }

  filtrarLibrosPorEtiqueta(etiqueta: string) {
    this.filtroEtiqueta = etiqueta;
  }
}
