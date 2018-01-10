import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatStepperModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatExpansionModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatStepperModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatStepperModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatExpansionModule
  ]
})

export class MaterialModule {}