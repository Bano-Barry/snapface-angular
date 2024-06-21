import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  snapButtonText : string = 'Oh Snap';
  userHasSnapped! : boolean;

  @Input() faceSnap! : FaceSnap;
  ngOnInit() : void { }

    onSnap(): void {
      if (this.userHasSnapped) {
        this.unSnap();
      } else {
        this.snap();
      }
    }

    unSnap() {
        this.faceSnap.removeSnap();
        this.snapButtonText = 'Oh Snap!';
        this.userHasSnapped = false;
    }

    snap() {
        this.faceSnap.addSnap();
        this.snapButtonText = 'Oops, unSnap!';
        this.userHasSnapped = true;
    }
}
