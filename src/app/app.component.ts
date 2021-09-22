import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'angular-docker';
  // Test to increase the load
  ngOnInit() {
    for (let index = 0; index < 100000000; index++) {
      console.log(index + 1000);
     }
  }
}
