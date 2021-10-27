import { Component, OnInit } from '@angular/core';
import { SliderService } from './slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(
    private sliderService: SliderService
  ) {}

  data: any = [
    {
      parentName: 'Dashboard',
      childProperties: [
        { propertyName: 'Dashboard v1' },
        { propertyName: 'Dashboard v2' },
        { propertyName: 'Dashboard v3' }
      ],
    },
    {
      parentName: 'Layout Options',
      childProperties: [
        { propertyName: 'Top Navigation' },
        { propertyName: 'Top Navigation + slider' },
        { propertyName: 'Boxed' },
      ],
    },
    {
      parentName: 'Charts',
      childProperties: [
        { propertyName: 'ChartJs' },
        { propertyName: 'Float' },
        { propertyName: 'Inline' },
      ],
    },
    {
      parentName: 'UI Elements',
      childProperties: [
        { propertyName: 'Dashboard v1' },
        { propertyName: 'Dashboard v2' },
        { propertyName: 'Dashboard v3' }
      ],
    },
    {
      parentName: 'Form',
      childProperties: [
        { propertyName: 'Top Navigation' },
        { propertyName: 'Top Navigation + slider' },
        { propertyName: 'Boxed' },
      ],
    },
    {
      parentName: 'Tables',
      childProperties: [
        { propertyName: 'ChartJs' },
        { propertyName: 'Float' },
        { propertyName: 'Inline' },
      ],
    },
    {
      parentName: 'Calendar',
      childProperties: [
        { propertyName: 'Dashboard v1' },
        { propertyName: 'Dashboard v2' },
        { propertyName: 'Dashboard v3' }
      ],
    },
    {
      parentName: 'Gallery',
      childProperties: [
        { propertyName: 'Top Navigation' },
        { propertyName: 'Top Navigation + slider' },
        { propertyName: 'Boxed' },
      ],
    },
    {
      parentName: 'Kanban Board',
      childProperties: [
        { propertyName: 'ChartJs' },
        { propertyName: 'Float' },
        { propertyName: 'Inline' },
      ],
    },
    {
      parentName: 'Mailbox',
      childProperties: [
        { propertyName: 'ChartJs' },
        { propertyName: 'Float' },
        { propertyName: 'Inline' },
      ],
    },
    {
      parentName: 'Pages',
      childProperties: [
        { propertyName: 'ChartJs' },
        { propertyName: 'Float' },
        { propertyName: 'Inline' },
      ],
    },
    {
      parentName: 'Extras',
      childProperties: [
        { propertyName: 'Dashboard v1' },
        { propertyName: 'Dashboard v2' },
        { propertyName: 'Dashboard v3' }
      ],
    },
    {
      parentName: 'Label',
      childProperties: [
        { propertyName: 'Top Navigation' },
        { propertyName: 'Top Navigation + slider' },
        { propertyName: 'Boxed' },
      ],
    },
    {
      parentName: 'Documentation',
      childProperties: [
        { propertyName: 'ChartJs' },
        { propertyName: 'Float' },
        { propertyName: 'Inline' },
      ],
    }
  ];
  
  class: any = [];

  links: any = [];

  ngOnInit(): void {
    this.class = [
      'icon-dashboard',
      'icon-th-large',
      'icon-bar-chart',
      'icon-plus-sign',
      'icon-plus-sign',
      'icon-table',
      'icon-calendar',
      'icon-picture',
      'icon-plus-sign',
      'icon-plus-sign',
      'icon-plus-sign',
      'icon-folder-close',
      'icon-search',
      'icon-file-alt',
      'icon-book',
    ];
    this.links = [
      '/add-bike',
      '/contact',
    ];
  }

  toggleAccordian(event: Event, index: any) {
    var element = (event.target as HTMLInputElement);
    element.classList.toggle('active');
    if (this.data[index].isActive) {
      this.data[index].isActive = false;
    } else {
      this.data[index].isActive = true;
    }
    var panel = (element.nextElementSibling as HTMLInputElement);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null as any;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }

}
