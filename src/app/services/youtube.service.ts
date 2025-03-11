import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private path = 'http://localhost:5000'; // Adjust to your backend URL

  constructor(private http: HttpClient) {

  }

  downloadAudioNoCoverNoDetail(videoUrl: string): Observable<any> {
    return this.http.post<any>(`${this.path}/download`, { url: videoUrl });
  }
  downloadAudioCoverNoDetail(videoUrl: string): Observable<any> {
    return this.http.post<any>(`${this.path}/download-image`, { url: videoUrl });
  }
  downloadAudioCoverDetail(videoUrl: string): Observable<any> {
    return this.http.post<any>(`${this.path}/download-image-detail`, { url: videoUrl });
  }

  downloads(videoUrl: string): Observable<any> {
    return this.http.get<any>(`${this.path}/${videoUrl}`);
  }
}