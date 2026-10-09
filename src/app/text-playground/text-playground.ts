import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from '../truncate-pipe';

@Component({
  selector: 'app-text-playground',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text-playground.html',
  styleUrl: './text-playground.css',
})
export class TextPlayground {
  readonly example = 'Aprender Angular es más divertido cuando puedes experimentar. Escribe una idea y descubre cómo se verá en una tarjeta o una vista previa.';
  text = this.example;
  limit = 60;
  completeWords = true;
  ellipsis = '...';
  copyMessage = '';
  private readonly truncate = new TruncatePipe();

  get result(): string {
    // El pipe de clase se conserva. Estos casos se controlan solo en la nueva sección.
    if (this.text.length <= this.limit) return this.text;
    const hasWordBoundary = this.text.substring(0, this.limit).lastIndexOf(' ') > 0;
    return this.truncate.transform(this.text, this.limit, this.completeWords && hasWordBoundary, this.ellipsis);
  }

  get wordCount(): number {
    return this.text.trim() ? this.text.trim().split(/\s+/).length : 0;
  }

  onChange(): void { this.copyMessage = ''; }

  reset(): void {
    this.text = this.example;
    this.limit = 60;
    this.completeWords = true;
    this.ellipsis = '...';
    this.onChange();
  }

  async copyResult(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.result);
      this.copyMessage = '¡Resultado copiado!';
    } catch {
      this.copyMessage = 'No se pudo copiar automáticamente. Selecciona el resultado y cópialo manualmente.';
    }
  }
}
