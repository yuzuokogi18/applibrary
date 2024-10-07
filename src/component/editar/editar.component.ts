import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgFor,NgIf],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  libros: any[] = [];
  libroEditando: any = null; 
  libroIndex: number | null = null; 

  constructor(private router: Router) {
    this.cargarLibros();
  }

  cargarLibros() {
   
    this.libros = JSON.parse(localStorage.getItem('libros') || '[]');
  }

  editarLibro(index: number) {
    this.libroEditando = { ...this.libros[index] };
    this.libroIndex = index;
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

  guardarCambios() {
    if (this.libroEditando && this.libroIndex !== null) {
      this.libros[this.libroIndex] = this.libroEditando;
      localStorage.setItem('libros', JSON.stringify(this.libros));
      this.libroEditando = null;
      this.libroIndex = null;

      alert('¡Libro actualizado exitosamente!');
    }
  }

  cancelarEdicion() {
    this.libroEditando = null;
    this.libroIndex = null;
  }
}
