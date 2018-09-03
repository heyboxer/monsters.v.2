import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { File } from '@ionic-native/file';

// Modules
import { ComponentsModule } from '../components/components.module';
import { BackgroundModule } from '../pages/select/background/bg.module';
import { ModelModule } from '../model/model.module';

// Components
import { MyApp } from './app.component';

// Pages
import { HomePage } from '../pages/home/home';
import { SelectPage } from '../pages/select/select';
import { GamePage } from '../pages/game/game';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectPage,
    GamePage,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    BackgroundModule,
    ModelModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelectPage,
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
