import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DialogsModule } from './dialogs/dialogs.module';

@NgModule({
  imports: [],
  exports: [DialogsModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Only allowed to be importet in the AppModule'
      );
    }
  }
}
