import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiRestService]
})
export class HomeComponent implements OnInit {

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
