import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {
  SliderObject: any;
  @ViewChild('slides', { static: true }) protected slides: IonSlides;

  // @ViewChild('testSlider',{static: false}) slider: ElementRef;  // first way

  constructor(private router: Router) {
  }

  ngOnInit() {
    // console.log( this.getActiveIndex());
    console.log("kkk");

  }
  nextSlide($event) {
    this.slides.getActiveIndex().then(index => {
      console.log(index);
      console.log('currentIndex:', index);
      this.slides.slideNext();
    });
  }

  getIndex(slider) {
    console.log(slider);
    let length = this.SliderObject.length;
    for (let i = 0; i < length; i++) {
      console.log(i);
      if (i === 3) {
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 7000)
      }
    }
  }
  goToHomePage() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2000)

  }

}
