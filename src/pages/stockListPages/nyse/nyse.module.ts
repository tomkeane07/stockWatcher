import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NysePage } from './nyse';

@NgModule({
  declarations: [
    NysePage,
  ],
  imports: [
    IonicPageModule.forChild(NysePage),
  ],
})
export class NysePageModule {}
