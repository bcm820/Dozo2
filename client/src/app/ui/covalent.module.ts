import { NgModule } from '@angular/core';

import {
  CovalentLayoutModule,
  CovalentJsonFormatterModule,
} from '@covalent/core';

import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

@NgModule({
  imports: [
    CovalentLayoutModule,
    CovalentJsonFormatterModule,
    CovalentDynamicFormsModule
  ],
  exports: [
    CovalentLayoutModule,
    CovalentJsonFormatterModule,
    CovalentDynamicFormsModule
  ]
})

export class CovalentModule {}