import { Component, OnInit } from '@angular/core';
import { livre } from 'src/app/models/livre.model';
import { livreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-livres-list',
  templateUrl: './livres-list.component.html',
  styleUrls: ['./livres-list.component.css']
})
export class livresListComponent implements OnInit {

  livres?: livre[];
  currentlivre: livre = {};
  currentIndex = -1;
  title = '';

  constructor(private livreService: livreService) { }

  ngOnInit(): void {
    this.retrievelivres();
  }

  retrievelivres(): void {
    this.livreService.getAll()
      .subscribe({
        next: (data) => {
          this.livres = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrievelivres();
    this.currentlivre = {};
    this.currentIndex = -1;
  }

  setActivelivre(livre: livre, index: number): void {
    this.currentlivre = livre;
    this.currentIndex = index;
  }

  removeAlllivres(): void {
    this.livreService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentlivre = {};
    this.currentIndex = -1;

    this.livreService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.livres = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}