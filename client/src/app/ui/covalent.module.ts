import { NgModule } from '@angular/core';

import {
  CovalentLayoutModule,
  CovalentJsonFormatterModule,
  CovalentDialogsModule
} from '@covalent/core';

@NgModule({
  imports: [
    CovalentLayoutModule,
    CovalentJsonFormatterModule,
    CovalentDialogsModule
  ],
  exports: [
    CovalentLayoutModule,
    CovalentJsonFormatterModule,
    CovalentDialogsModule
  ]
})

export class CovalentModule {}