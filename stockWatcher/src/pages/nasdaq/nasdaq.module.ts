import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NasdaqPage } from './nasdaq';

@NgModule({
  declarations: [
    NasdaqPage,
  ],
  imports: [
    IonicPageModule.forChild(NasdaqPage),
  ],
})
export class NasdaqPageModule {}
