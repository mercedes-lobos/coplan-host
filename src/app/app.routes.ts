import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'board',
    loadComponent: () => import('./features/board/board.component').then(c => c.BoardComponent)
  }
];
