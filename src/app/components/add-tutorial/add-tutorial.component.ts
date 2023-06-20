import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial = {
    id: 1,
    title: '',
    description: '',
    published: false
  };
  submitted = false;
  x = 7;

  constructor(private tutorialService: TutorialService){ }

  ngOnInit(): void {

  }

  saveTutorial() {
    const data = {
      id: ++this.x,
      title: this.tutorial.title,
      description: this.tutorial.description,
      published: false
    };
    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      id: ++this.x,
      title: '',
      description: '',
      published: false
    };
  }

}
