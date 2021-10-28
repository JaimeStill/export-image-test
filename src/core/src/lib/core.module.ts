import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { Components } from './components';
import { Directives } from './directives';
import { Pipes } from './pipes';

@NgModule({
  declarations: [
    ...Components,
    ...Directives,
    ...Pipes
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ...Components,
    ...Directives,
    ...Pipes,
    MaterialModule
  ]
})
export class CoreModule { }
