import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  sidebar!: HTMLElement;
  maxSidebar!: HTMLElement;
  miniSidebar!: HTMLElement;
  roundout!: HTMLElement;
  maxToolbar!: HTMLElement;
  logo!: HTMLElement;
  content!: HTMLElement;
  moon!: HTMLElement;
  sun!: HTMLElement;

  ngAfterViewInit() {
    this.sidebar = document.querySelector('aside') as HTMLElement;
    this.maxSidebar = document.querySelector('.max') as HTMLElement;
    this.miniSidebar = document.querySelector('.mini') as HTMLElement;
    this.roundout = document.querySelector('.roundout') as HTMLElement;
    this.maxToolbar = document.querySelector('.max-toolbar') as HTMLElement;
    this.logo = document.querySelector('.logo') as HTMLElement;
    this.content = document.querySelector('.content') as HTMLElement;
    this.moon = document.querySelector('.moon') as HTMLElement;
    this.sun = document.querySelector('.sun') as HTMLElement;
  }

  setDark(val: string) {
    if (val === 'dark') {
      document.documentElement.classList.add('dark');
      this.moon.classList.add('hidden');
      this.sun.classList.remove('hidden');
    } else {
      document.documentElement.classList.remove('dark');
      this.sun.classList.add('hidden');
      this.moon.classList.remove('hidden');
    }
  }
  openNav() {
    if (this.sidebar.classList.contains('-translate-x-48')) {
      // max sidebar
      this.sidebar.classList.remove('-translate-x-48');
      this.sidebar.classList.add('translate-x-none');
      this.maxSidebar.classList.remove('hidden');
      this.maxSidebar.classList.add('flex');
      this.miniSidebar.classList.remove('flex');
      this.miniSidebar.classList.add('hidden');
      this.maxToolbar.classList.add('translate-x-0');
      this.maxToolbar.classList.remove('translate-x-24', 'scale-x-0');
      this.logo.classList.remove('ml-12');
      this.content.classList.remove('ml-12');
      this.content.classList.add('ml-12', 'md:ml-60');
    } else {
      // mini sidebar
      this.sidebar.classList.add('-translate-x-48');
      this.sidebar.classList.remove('translate-x-none');
      this.maxSidebar.classList.add('hidden');
      this.maxSidebar.classList.remove('flex');
      this.miniSidebar.classList.add('flex');
      this.miniSidebar.classList.remove('hidden');
      this.maxToolbar.classList.add('translate-x-24', 'scale-x-0');
      this.maxToolbar.classList.remove('translate-x-0');
      this.logo.classList.add('ml-12');
      this.content.classList.remove('ml-12', 'md:ml-60');
      this.content.classList.add('ml-12');
    }
  }
}
