import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgFor,NgIf],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {
  libros: any[] = [];
  libroEditando: any = null;
  libroIndexEditando: number | null = null;

  constructor(private router: Router) {
    this.cargarLibros();
  }

  cargarLibros() {
    this.libros = JSON.parse(localStorage.getItem('libros') || '[]');
  }

  editarLibro(index: number) {
    this.libroEditando = { ...this.libros[index] };
    this.libroIndexEditando = index;
  }

  eliminarLibro(index: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este libro?')) {
      this.libros.splice(index, 1); 
      localStorage.setItem('libros', JSON.stringify(this.libros)); 
      alert('Libro eliminado exitosamente.');
    }
  }

  guardarCambios() {
    if (this.libroIndexEditando !== null) {
      this.libros[this.libroIndexEditando] = this.libroEditando;
      localStorage.setItem('libros', JSON.stringify(this.libros)); 
      alert('¡Libro actualizado exitosamente!');
      this.cancelarEdicion(); 
    }
  }

  cancelarEdicion() {
    this.libroEditando = null; 
    this.libroIndexEditando = null;
  }
  actualizarTitle(event: any) {
    this.libroEditando.title = event.target.value;
  }

  actualizarAuthor(event: any) {
    this.libroEditando.author = event.target.value;
  }

  actualizarGenre(event: any) {
    this.libroEditando.genre = event.target.value;
  }

  actualizarDescripcion(event: any) {
    this.libroEditando.descripcion = event.target.value;
  }
}
