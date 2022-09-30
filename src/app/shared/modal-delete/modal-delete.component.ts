import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css'],
})
export class ModalDeleteComponent implements OnInit {
  @Output() confirmDeleteEvent = new EventEmitter<boolean>();
  @Input() taskSelecionada!: Task;

  constructor() {}

  ngOnInit(): void {}

  confirmationDelete() {
    this.confirmDeleteEvent.emit(true);
  }
}
