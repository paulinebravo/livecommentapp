import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { MatButtonModule, MatCardModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';

import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';



@NgModule ({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
      ],

      exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
      ],
})

export class MaterialModule {
}
