import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoPipes } from './demo-pipes/demo-pipes';
import { TextPlayground } from './text-playground/text-playground';
@Component({
 selector: 'app-root',
 standalone: true,
 imports: [RouterOutlet, DemoPipes, TextPlayground],
 templateUrl: './app.html',
 styleUrl: './app.css'
})
export class App {
 title = 'angular-project-demo';
}
