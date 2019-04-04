import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapaComponent } from './capa/capa.component';
import { HeaderComponent } from './capa/header/header.component';
import { FooterComponent } from './capa/footer/footer.component';
import { BodyComponent } from './capa/body/body.component';

@NgModule({
  declarations: [CapaComponent, HeaderComponent, FooterComponent, BodyComponent],
  imports: [
    CommonModule
  ],
  exports:[CapaComponent]
})
export class NucleoModule { }
