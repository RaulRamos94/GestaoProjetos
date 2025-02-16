import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { ContainerComponent } from "../container/container.component";

@Component({
  selector: 'app-template',
  imports: [SidenavComponent, ContainerComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {

}
