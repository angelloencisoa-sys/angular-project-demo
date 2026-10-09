import { Component } from '@angular/core';
import { ExponentialPipe } from '../exponential-pipe';
import { TruncatePipe } from '../truncate-pipe';
@Component({
 selector: 'app-demo-pipes',
 standalone: true,
 imports: [ExponentialPipe, TruncatePipe],
 templateUrl: './demo-pipes.html',
 styleUrl: './demo-pipes.css'
})
export class DemoPipes {
 // Valores para exponential
 base: number = 2;
 exponente: number = 3;
 // Valores para truncate
 textoLargo: string = 'Angular es un framework de desarrollo web creado por Google que permite crear aplicaciones escalables y de alto rendimiento.';
 textoCorto: string = 'Hola mundo';
}