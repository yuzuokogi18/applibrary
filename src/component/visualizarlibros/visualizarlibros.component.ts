import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-visualizarlibros',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './visualizarlibros.component.html',
  styleUrl: './visualizarlibros.component.css'
})
export class VisualizarlibrosComponent {
  libros: any[] = [];

  constructor() {
    this.cargarLibros();
  }

  cargarLibros() {
    // Cargar los libros desde el localStorage
    this.libros = JSON.parse(localStorage.getItem('libros') || '[]');
  }
}
