import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
 name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
 transform(
 value: string,
 limit: number = 25,
 completeWords: boolean = false,
 ellipsis: string = '...'
 ): string {
 // Caso 1: el valor es vacío o no es string
 if (!value) return '';
 // Caso 2: si completeWords es true, cortamos hasta la última palabra completa
 if (completeWords) {
 limit = value.substring(0, limit).lastIndexOf(' ');
 }
 // Caso 3: si el texto es más largo que el límite, lo cortamos y añadimos puntos suspensivos
 return value.length > limit
 ? value.substring(0, limit) + ellipsis
 : value;
 }
}
