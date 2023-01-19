import { Component } from '@angular/core';
import { livre } from 'src/app/models/livre.model';
import { livreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddlivreComponent {

  livre: livre = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private livreService: livreService) { }

  savelivre(): void {
    const data = {
      title: this.livre.title,
      description: this.livre.description
    };

    this.livreService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newlivre(): void {
    this.submitted = false;
    this.livre = {
      title: '',
      description: '',
      published: false
    };
  }

}