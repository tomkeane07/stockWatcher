import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DowJonesPage } from './dow-jones';

@NgModule({
  declarations: [
    DowJonesPage,
  ],
  imports: [
    IonicPageModule.forChild(DowJonesPage),
  ],
})
export class DowJonesPageModule {}
