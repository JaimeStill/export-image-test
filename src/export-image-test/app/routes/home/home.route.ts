import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';

import * as htmlToImage from 'html-to-image';
import { toPng } from 'html-to-image';

@Component({
  selector: 'home-route',
  templateUrl: 'home.route.html'
})
export class HomeRoute implements OnInit {
  gradient = `linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 20%, rgba(0,212,255,1) 100%)`

  @ViewChild('image') image!: ElementRef;

  constructor(
  ) { }

  ngOnInit() {
  }

  download = async () => {
    const img = await toPng(this.image.nativeElement);

    var link = document.createElement('a');
    link.download = 'test.png';
    link.href = img;
    link.click();
  }
}
