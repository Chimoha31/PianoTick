import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  onTimer() {
    console.log("Clicked Timer")
  }
  onMetronome() {
    console.log("Clicked Metronome")
  }
  onDone() {
    console.log("Clicked Done btn")
  }
}
