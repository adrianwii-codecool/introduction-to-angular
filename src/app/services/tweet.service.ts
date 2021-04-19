import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tweet } from '../models/tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient) { } // dependency injection

  getTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(`${environment.apiUrl}tweets?count=10`);
  }
}
