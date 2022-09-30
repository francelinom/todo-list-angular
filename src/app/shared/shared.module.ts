import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemErroComponent } from './mensagem-erro/mensagem-erro.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';

@NgModule({
  declarations: [MensagemErroComponent, ModalDeleteComponent],
  exports: [MensagemErroComponent, ModalDeleteComponent],
  imports: [CommonModule],
})
export class SharedModule {}
