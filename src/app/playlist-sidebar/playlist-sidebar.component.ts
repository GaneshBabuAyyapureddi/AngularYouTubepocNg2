import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-sidebar',
  templateUrl: './playlist-sidebar.component.html',
  styleUrls: ['./playlist-sidebar.component.css']
})
export class PlaylistSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickVideoFromPlayList(video) {
    console.log(video.url);
  }

  videoList = [
    {
      "id": "abcd1234",
      "url": "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os",
      "description": "Learn Webpack 2 - what it is, how it works and how to use it!",
      "title": "WHAT IS WEBPACK, HOW DOES IT WORK? | Webpack 2 Basics Tutorial",
      "noOfLikes": 5689,
      "noOfDislikes": 45789,
      "noOfViews": 408286,
      "dateCreated": "12/05/1990",
      "thumbnailImage": "http://lexhindustan.com/wp-content/uploads/2017/07/placeholder_600x450.jpg",
      "uploadedBy": "Hasina"
    },
    {
      "id": "abcd1234",
      "url": "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os",
      "description": "Learn Webpack 2 - what it is, how it works and how to use it!",
      "title": "WHAT IS WEBPACK, HOW DOES IT WORK? | Webpack 2 Basics Tutorial",
      "noOfLikes": 5689,
      "noOfDislikes": 45789,
      "noOfViews": 785612,
      "dateCreated": "12/05/1990",
      "thumbnailImage": "http://lexhindustan.com/wp-content/uploads/2017/07/placeholder_600x450.jpg",
      "uploadedBy": "Hollywood"
    },
    {
      "id": "abcd1234",
      "url": "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os",
      "description": "Learn Webpack 2 - what it is, how it works and how to use it!",
      "title": "WHAT IS WEBPACK, HOW DOES IT WORK? | Webpack 2 Basics Tutorial",
      "noOfLikes": 5689,
      "noOfDislikes": 45789,
      "noOfViews": 125,
      "dateCreated": "12/05/1990",
      "thumbnailImage": "http://lexhindustan.com/wp-content/uploads/2017/07/placeholder_600x450.jpg",
      "uploadedBy": "Traversy Media"
    },
    {
      "id": "abcd1234",
      "url": "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os",
      "description": "Learn Webpack 2 - what it is, how it works and how to use it!",
      "title": "WHAT IS WEBPACK, HOW DOES IT WORK? | Webpack 2 Basics Tutorial",
      "noOfLikes": 5689,
      "noOfDislikes": 45789,
      "noOfViews": 408286,
      "dateCreated": "12/05/1990",
      "thumbnailImage": "http://lexhindustan.com/wp-content/uploads/2017/07/placeholder_600x450.jpg",
      "uploadedBy": "Hasina"
    },
    {
      "id": "abcd1234",
      "url": "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os",
      "description": "Learn Webpack 2 - what it is, how it works and how to use it!",
      "title": "WHAT IS WEBPACK, HOW DOES IT WORK? | Webpack 2 Basics Tutorial",
      "noOfLikes": 5689,
      "noOfDislikes": 45789,
      "noOfViews": 785612,
      "dateCreated": "12/05/1990",
      "thumbnailImage": "http://lexhindustan.com/wp-content/uploads/2017/07/placeholder_600x450.jpg",
      "uploadedBy": "Hollywood"
    },
    {
      "id": "abcd1234",
      "url": "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os",
      "description": "Learn Webpack 2 - what it is, how it works and how to use it!",
      "title": "WHAT IS WEBPACK, HOW DOES IT WORK? | Webpack 2 Basics Tutorial",
      "noOfLikes": 5689,
      "noOfDislikes": 45789,
      "noOfViews": 125,
      "dateCreated": "12/05/1990",
      "thumbnailImage": "http://lexhindustan.com/wp-content/uploads/2017/07/placeholder_600x450.jpg",
      "uploadedBy": "Traversy Media"
    },
    {
      "id": "abcd1234",
      "url": "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os",
      "description": "Learn Webpack 2 - what it is, how it works and how to use it!",
      "title": "WHAT IS WEBPACK, HOW DOES IT WORK? | Webpack 2 Basics Tutorial",
      "noOfLikes": 5689,
      "noOfDislikes": 45789,
      "noOfViews": 408286,
      "dateCreated": "12/05/1990",
      "thumbnailImage": "http://lexhindustan.com/wp-content/uploads/2017/07/placeholder_600x450.jpg",
      "uploadedBy": "Hasina"
    },
    {
      "id": "abcd1234",
      "url": "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os",
      "description": "Learn Webpack 2 - what it is, how it works and how to use it!",
      "title": "WHAT IS WEBPACK, HOW DOES IT WORK? | Webpack 2 Basics Tutorial",
      "noOfLikes": 5689,
      "noOfDislikes": 45789,
      "noOfViews": 785612,
      "dateCreated": "12/05/1990",
      "thumbnailImage": "http://lexhindustan.com/wp-content/uploads/2017/07/placeholder_600x450.jpg",
      "uploadedBy": "Hollywood"
    },
    {
      "id": "abcd1234",
      "url": "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os",
      "description": "Learn Webpack 2 - what it is, how it works and how to use it!",
      "title": "WHAT IS WEBPACK, HOW DOES IT WORK? | Webpack 2 Basics Tutorial",
      "noOfLikes": 5689,
      "noOfDislikes": 45789,
      "noOfViews": 125,
      "dateCreated": "12/05/1990",
      "thumbnailImage": "http://lexhindustan.com/wp-content/uploads/2017/07/placeholder_600x450.jpg",
      "uploadedBy": "Traversy Media"
    },
    {
      "id": "abcd1234",
      "url": "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os",
      "description": "Learn Webpack 2 - what it is, how it works and how to use it!",
      "title": "WHAT IS WEBPACK, HOW DOES IT WORK? | Webpack 2 Basics Tutorial",
      "noOfLikes": 5689,
      "noOfDislikes": 45789,
      "noOfViews": 408286,
      "dateCreated": "12/05/1990",
      "thumbnailImage": "http://lexhindustan.com/wp-content/uploads/2017/07/placeholder_600x450.jpg",
      "uploadedBy": "Hasina"
    },
    {
      "id": "abcd1234",
      "url": "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os",
      "description": "Learn Webpack 2 - what it is, how it works and how to use it!",
      "title": "WHAT IS WEBPACK, HOW DOES IT WORK? | Webpack 2 Basics Tutorial",
      "noOfLikes": 5689,
      "noOfDislikes": 45789,
      "noOfViews": 785612,
      "dateCreated": "12/05/1990",
      "thumbnailImage": "http://lexhindustan.com/wp-content/uploads/2017/07/placeholder_600x450.jpg",
      "uploadedBy": "Hollywood"
    },
    {
      "id": "abcd1234",
      "url": "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os",
      "description": "Learn Webpack 2 - what it is, how it works and how to use it!",
      "title": "WHAT IS WEBPACK, HOW DOES IT WORK? | Webpack 2 Basics Tutorial",
      "noOfLikes": 5689,
      "noOfDislikes": 45789,
      "noOfViews": 125,
      "dateCreated": "12/05/1990",
      "thumbnailImage": "http://lexhindustan.com/wp-content/uploads/2017/07/placeholder_600x450.jpg",
      "uploadedBy": "Traversy Media"
    }
  ];

}
