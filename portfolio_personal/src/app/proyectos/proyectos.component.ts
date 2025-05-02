import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit{

  proyectos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://api.github.com/users/neoarmadam/repos')
      .subscribe(data => {
        this.proyectos = data.filter(repo => !repo.fork);
      });
  }

}
