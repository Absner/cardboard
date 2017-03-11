import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiRestService {

  constructor(private http: Http) { }

  public getPlayList(){
    let playList  = this.http.get('http://localhost/angular2/mi-aplicacion/api/getPlayList.php')
                    .map((res:Response) =>  res.json());
    return playList;
  }

}
