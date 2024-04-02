import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'file_upload_example';
  filePreview!:any;
  onFileChange(event:any){
    let file = event.target.files[0];
    console.log(event.target.files[0]);
    this.filePreview=URL.createObjectURL(file);

  }
}
