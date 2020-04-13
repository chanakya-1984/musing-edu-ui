import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { InstituteRoutingModule } from './institute-routing.module';
import { SetupDisplayComponent } from './setup-display/setup-display.component';
import { UpsertInstituteComponent } from './upsert-institute/upsert-institute.component';
import * as FromInstituteReducer from './store/institute.store.reduces';
import { InstituteEffects } from './store/institute.store.effects';
import { AppCommonModule } from '../app-common/app-common.module';
import { MaterialModules } from '../material.module';



@NgModule({
  declarations: [SetupDisplayComponent, UpsertInstituteComponent],
  imports: [
    MaterialModules,
    CommonModule,
    AppCommonModule,
    InstituteRoutingModule,
    StoreModule.forFeature('Institute', FromInstituteReducer.InstituteReducer),
    EffectsModule.forFeature([InstituteEffects])
  ]
})
export class InstituteModule { }
