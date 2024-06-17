import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'coplan-host';
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

  //   <script>
  //   const sidebar = document.querySelector("aside");
  //   const maxSidebar = document.querySelector(".max")
  //   const miniSidebar = document.querySelector(".mini")
  //   const roundout = document.querySelector(".roundout")
  //   const maxToolbar = document.querySelector(".max-toolbar")
  //   const logo = document.querySelector('.logo')
  //   const content = document.querySelector('.content')
  //   const moon = document.querySelector(".moon")
  //   const sun = document.querySelector(".sun")

  //   function setDark(val) {
  //     if (val === "dark") {
  //       document.documentElement.classList.add('dark')
  //       moon.classList.add("hidden")
  //       sun.classList.remove("hidden")
  //     } else {
  //       document.documentElement.classList.remove('dark')
  //       sun.classList.add("hidden")
  //       moon.classList.remove("hidden")
  //     }
  //   }

  //   function openNav() {
  //     if (sidebar.classList.contains('-translate-x-48')) {
  //       // max sidebar
  //       sidebar.classList.remove("-translate-x-48")
  //       sidebar.classList.add("translate-x-none")
  //       maxSidebar.classList.remove("hidden")
  //       maxSidebar.classList.add("flex")
  //       miniSidebar.classList.remove("flex")
  //       miniSidebar.classList.add("hidden")
  //       maxToolbar.classList.add("translate-x-0")
  //       maxToolbar.classList.remove("translate-x-24", "scale-x-0")
  //       logo.classList.remove("ml-12")
  //       content.classList.remove("ml-12")
  //       content.classList.add("ml-12", "md:ml-60")
  //     } else {
  //       // mini sidebar
  //       sidebar.classList.add("-translate-x-48")
  //       sidebar.classList.remove("translate-x-none")
  //       maxSidebar.classList.add("hidden")
  //       maxSidebar.classList.remove("flex")
  //       miniSidebar.classList.add("flex")
  //       miniSidebar.classList.remove("hidden")
  //       maxToolbar.classList.add("translate-x-24", "scale-x-0")
  //       maxToolbar.classList.remove("translate-x-0")
  //       logo.classList.add('ml-12')
  //       content.classList.remove("ml-12", "md:ml-60")
  //       content.classList.add("ml-12")

  //     }

  //   }
  // </script>
}
