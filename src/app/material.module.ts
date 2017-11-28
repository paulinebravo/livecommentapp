import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { MatButtonModule, MatCardModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';



@NgModule ({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,

      ],

      exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,


      ],
})

export class MaterialModule {
}
