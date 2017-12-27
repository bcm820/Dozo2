import { NgModule } from '@angular/core';

import {
  CovalentLayoutModule,
  CovalentJsonFormatterModule
} from '@covalent/core';

@NgModule({
  imports: [
    CovalentLayoutModule,
    CovalentJsonFormatterModule
  ],
  exports: [
    CovalentLayoutModule,
    CovalentJsonFormatterModule
  ]
})

export class CovalentModule {}