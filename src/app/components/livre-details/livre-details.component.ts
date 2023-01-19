import { Component, Input, OnInit } from '@angular/core';
import { livreService } from 'src/app/services/livre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { livre } from 'src/app/models/livre.model';

@Component({
  selector: 'app-livre-details',
  templateUrl: './livre-details.component.html',
  styleUrls: ['./livre-details.component.css']
})
export class livreDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentlivre: livre = {
    title: '',
    description: '',
    published: false
  };
  
  message = '';

  constructor(
    private livreService: livreService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getlivre(this.route.snapshot.params["id"]);
    }
  }

  getlivre(id: string): void {
    this.livreService.get(id)
      .subscribe({
        next: (data) => {
          this.currentlivre = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentlivre.title,
      description: this.currentlivre.description,
      published: status
    };

    this.message = '';

    this.livreService.update(this.currentlivre.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentlivre.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updatelivre(): void {
    this.message = '';

    this.livreService.update(this.currentlivre.id, this.currentlivre)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This livre was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deletelivre(): void {
    this.livreService.delete(this.currentlivre.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/livres']);
        },
        error: (e) => console.error(e)
      });
  }

}