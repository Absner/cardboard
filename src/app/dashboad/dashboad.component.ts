import { Component, OnInit,NgZone, Inject } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

declare var jQuery:any;
declare var $:any;
const URL = 'http://localhost/angular2/mi-aplicacion/api/addVideoFile.php';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']

})
export class DashboadComponent implements OnInit {


  constructor() {

   }

  ngOnInit() {
    $('ul.tabs').tabs();
    $('select').material_select();
  }

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }


}
