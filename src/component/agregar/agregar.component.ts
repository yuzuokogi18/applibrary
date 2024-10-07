import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  title: string = '';
  author: string = '';
  genre: string = '';
  pageCount: number | null = null; 
  descripcion: string = '';

  agregarLibro() {
    const nuevoLibro = {
      title: this.title,
      author: this.author,
      genre: this.genre,
      pageCount: this.pageCount,
      descripcion: this.descripcion,
    };

    const libros = JSON.parse(localStorage.getItem('libros') || '[]');

    libros.push(nuevoLibro);
    localStorage.setItem('libros', JSON.stringify(libros));
    alert('¡Libro agregado exitosamente!');
    this.title = '';
    this.author = '';
    this.genre = '';
    this.pageCount = null;
    this.descripcion = '';
  }
  actualizarTitle(event: any) {
    this.title = event.target.value;
  }

  actualizarAuthor(event: any) {
    this.author = event.target.value;
  }

  actualizarGenre(event: any) {
    this.genre = event.target.value;
  }

  actualizarPageCount(event: any) {
    this.pageCount = event.target.value ? +event.target.value : null; 
  }

  actualizarDescripcion(event: any) {
    this.descripcion = event.target.value;
  }
}