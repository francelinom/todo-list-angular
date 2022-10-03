import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements OnInit {
  themeDark: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.themeDark = !this.themeDark;
    document.body.classList.toggle('dark-theme');
  }
}
