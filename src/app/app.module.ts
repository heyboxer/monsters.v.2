import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { File } from '@ionic-native/file';

// Modules
import { ComponentsModule } from '../components/components.module';
import { ModelModule } from '../model/model.module';

// Components
import { MyApp } from './app.component';

// Pages
import { HomePage } from '../pages/home/home';
import { GamePage } from '../pages/game/game';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GamePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    ModelModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GamePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
