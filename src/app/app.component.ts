import { FaceSnapComponent } from './face-snap/face-snap.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnap } from './models/face-snap';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'snapface';
  mySnap! : FaceSnap;
  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );
  }

}
