import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  tweets: Tweet[];
  title: string = 'Hello on our sample component with tweets!';

  // dependency injection
  constructor(private tweetService: TweetService) {  }

  ngOnInit(): void {
    this.tweetService.getTweets().subscribe(
      tweets => this.tweets = tweets
    );
  }

}
