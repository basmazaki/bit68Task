import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { StatusBar } from '@ionic-native/status-bar';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router: Router, private platform: Platform,
    private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.initializeApp();

  }

  ngOnInit() {
    
    setTimeout(() => {
      this.router.navigate(['/slider']);
    }, 9000);
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(true);
      if (window.statusbar) {
        this.statusBar.hide();
      }
      this.statusBar.backgroundColorByHexString("#ffffff");
      // this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
