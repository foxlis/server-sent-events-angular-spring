import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eventData;

  connectEventSource() {
    const eventSource = new EventSource('http://localhost:8080/progress');
    eventSource.addEventListener('progressEvent', message => {
      this.eventData = (<any>message).data;
    })
  }
}
