import {Component, OnInit} from '@angular/core';
import {categories} from './categories.mock';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  categories: any[] = categories;
  isCollapsed = false;
  constructor() {
  }

  ngOnInit(): void {
  }
  toggleMenu(){
    this.isCollapsed = !this.isCollapsed;
  }
}
