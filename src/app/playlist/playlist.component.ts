import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  providers: [ApiRestService]
})
export class PlaylistComponent implements OnInit {

  public playList:any;

  constructor(private videoService: ApiRestService) { }

  ngOnInit() {
    this.getVideos();
  }

  public getVideos() {
    this.videoService.getPlayList().subscribe(data  =>  this.playList = data,
    error =>  console.log(error), ()  =>  console.log(this.playList));

  }

}
