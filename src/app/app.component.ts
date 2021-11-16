import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl="../assets/bl-logo.png";
  url ="https://www.bridgelabz.com/";
  userName: "";
  nameError: String="";

  ngOnInit(): void {
    this.title = "Hello From Bridgelabz"
  }
  onClick($event){
    console.log("save button is clicked", $event);
    window.open(this.url, "_blank");
  }
  onInput($event){
    console.log("Chang Event Occurred!", $event.data);
    const nameRegex= RegExp('^[A-Z]{1}[a-zA-z\\s]{2,}$');
    if(nameRegex.test(this.userName)) {
      this.nameError="";
      return;
    }
    this.nameError ="Name is incorrect"
  }
}
