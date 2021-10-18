import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';

  posts = [
    {
      title: 'Neat Tree',
      imgUrl: 'assets/tree.jpeg',
      imgAlt: 'tree on a hill in front of a clear blue sky',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'snowy Mountain',
      imgUrl: 'assets/mountain.jpeg',
      imgAlt: '',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain'
    },
    {
      title: 'Mountain Biking',
      imgUrl: 'assets/biking.jpeg',
      imgAlt: '',
      username: 'biking1222',
      content: 'I did some biking today'
    }
  ]
}
