import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello From Sanjay.';
  imgUrl="bl-logo.png";
  onClick($event){
    console.log("save button is clicked", $event);
    window.open(this.title, "_blank");
  }
}
