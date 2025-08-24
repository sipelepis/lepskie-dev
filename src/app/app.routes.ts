import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/home/home").then(m => m.Home),
  },
  {
    path: "contact",
    loadComponent: () => import("./pages/contact/contact").then(m => m.Contact),
  },
  {
    path: "about",
    loadComponent: () => import("./pages/about/about").then(m => m.About),
  },
  {
    path: "**",
    loadComponent: () => import("./pages/page-not-found/page-not-found").then(m => m.PageNotFound),
  }
];
