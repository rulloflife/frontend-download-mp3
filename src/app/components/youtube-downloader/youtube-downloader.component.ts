import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-youtube-downloader',
  imports: [ReactiveFormsModule,],
  templateUrl: './youtube-downloader.component.html',
  styleUrl: './youtube-downloader.component.scss'
})
export class YoutubeDownloaderComponent {

  downloadLink: string | null = null;
  videoUrl = new FormControl('')
  isLoading: boolean = false;

  constructor(
    private youtubeService: YoutubeService
  ) { }

  downloadMp3() {
    if (!this.videoUrl.value?.trim()) return;
    const usl_youtube = this.videoUrl.value
    this.isLoading = true;
    this.youtubeService.downloadAudioCoverDetail(usl_youtube).subscribe(
      (response) => {
        if (response.success) {
          this.downloadLink = `http://localhost:5000${response.fileUrl}`;
        } else {
          alert('Download failed: ' + response.error);
        }
        this.isLoading = false;
      },
      (error) => {
        alert('Error processing request.');
        console.error(error);
        this.isLoading = false;
      }
    );
  }
}
