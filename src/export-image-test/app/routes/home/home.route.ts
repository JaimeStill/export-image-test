import {
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

import {
  toPng,
  toJpeg,
  toSvg
} from 'html-to-image';

import {
  getNodeHeight,
  getNodeWidth,
  getPixelRatio,
  createImage,
  nodeToDataURL
} from 'html-to-image/lib/util';

import { cloneNode } from 'html-to-image/lib/cloneNode';
import { embedImages } from 'html-to-image/lib/embedImages';
import { applyStyleWithOptions } from 'html-to-image/lib/applyStyleWithOptions';

@Component({
  selector: 'home-route',
  templateUrl: 'home.route.html',
  styleUrls: ['home.route.css']
})
export class HomeRoute {
  filter = `contrast(1.4) brightness(1.8) opacity(0.5)`;
  backdrop = `blur(20px) brightness(1.8) contrast(1.4)`;
  format = 'png';

  formats = [
    'png',
    'jpg',
    'svg'
  ];

  img!: HTMLImageElement;
  canvas!: HTMLCanvasElement;

  @ViewChild('image') image!: ElementRef;
  @ViewChild('svgHost') svgHost!: ElementRef<HTMLElement>;
  @ViewChild('canvasHost') canvasHost!: ElementRef<HTMLElement>;

  private getImageSize(node: HTMLElement) {
    const width = getNodeWidth(node);
    const height = getNodeHeight(node);

    return { width, height }
  }

  private getImage = async <T extends HTMLElement>(node: T) => {
    const { width, height } = this.getImageSize(node);

    let el = await cloneNode(node, {}, true);
    el = await embedImages(el!, {});
    el = applyStyleWithOptions(el, {});

    const url = await nodeToDataURL(el, width, height);
    console.log(url);

    const img = await createImage(url);

    return img;
  }

  private getCanvas = async <T extends HTMLElement>(node: T, img: HTMLImageElement) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const ratio = getPixelRatio();
    const { width, height } = this.getImageSize(node);

    const canvasWidth = width;
    const canvasHeight = height;

    canvas.width = canvasWidth * ratio;
    canvas.height = canvasHeight * ratio;

    canvas.style.width = `${canvasWidth}`;
    canvas.style.height = `${canvasHeight}`;

    context!.drawImage(img, 0, 0, canvas.width, canvas.height);

    return canvas;
  }

  generate = async () => {
    let img: string;

    switch (this.format) {
      case 'jpg':
        img = await toJpeg(this.image.nativeElement);
        break;
      case 'svg':
        img = await toSvg(this.image.nativeElement);
        break;
      case 'png':
      default:
        img = await toPng(this.image.nativeElement);
        break;
    }

    this.download(`test.${this.format}`, img);
  }

  download = (name: string, url: string) => {
    const link = document.createElement('a');
    link.download = name;
    link.href = url;
    link.click();
  }

  custom = async () => {
    this.img = await this.getImage(this.image.nativeElement);

    if (this.svgHost)
      this.svgHost.nativeElement.appendChild(this.img);

    this.canvas = await this.getCanvas(this.image.nativeElement, this.img);

    if (this.canvasHost)
      this.canvasHost.nativeElement.appendChild(this.canvas);
  }
}
