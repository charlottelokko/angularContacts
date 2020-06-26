import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component'
import { ContactComponent } from './contact/contact.component'
import { ContactAddEditComponent } from './contact-add-edit/contact-add-edit.component'

const routes: Routes = [
  { path: '', component: ContactsComponent, pathMatch: 'full' },
  { path: 'contact/:id', component: ContactComponent },
  { path: 'add', component: ContactAddEditComponent },
  { path: 'blogpost/edit/:id', component: ContactAddEditComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
