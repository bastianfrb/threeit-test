import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainLayoutComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    RouterModule
  ],
  exports: [MainLayoutComponent]
})
export class SharedModule { }
