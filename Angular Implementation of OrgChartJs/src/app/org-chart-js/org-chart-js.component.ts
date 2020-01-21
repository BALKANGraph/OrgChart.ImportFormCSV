import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
declare const OrgChart;

@Component({
  selector: 'app-org-chart-js',
  templateUrl: './org-chart-js.component.html',
  styleUrls: ['./org-chart-js.component.scss']
})
export class OrgChartJsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const chart = new OrgChart(document.getElementById('tree'), {
      menu: {
        importCSV: {
          text: 'Import CSV',
          icon: OrgChart.icon.csv(24, 24, '#7A7A7A'),
          onClick: () => { chart.importCSV(); }
        },
        csv: { text: 'Export CSV' }
      },
      template: 'ana',
      enableDragDrop: false,
      nodeMouseClick: OrgChart.action.edit,
      nodeMenu: {
        details: { text: 'Details' },
        edit: { text: 'Edit' },
        add: { text: 'Add' },
        remove: { text: 'Remove' }
      },
      dragDropMenu: {
        addInGroup: { text: 'Add in group' },
        addAsChild: { text: 'Add as child' }
      },
      nodeBinding: {
        field_0: 'name',
        field_1: 'title',
        img_0: 'img'
      },
      tags: {
        Directors: {
          group: true,
          groupName: 'Directors',
          groupState: OrgChart.EXPAND,
          template: 'group_grey'
        },
        HRs: {
          group: true,
          groupName: 'HR Team',
          groupState: OrgChart.COLLAPSE,

          template: 'group_grey'
        },
        Sales: {
          group: true,
          groupName: 'Sales Team',
          groupState: OrgChart.EXPAND,
          template: 'group_grey'
        },
        Devs: {
          group: true,
          groupName: 'Dev Team',
          groupState: OrgChart.EXPAND,
          template: 'group_grey'
        }
      },
      nodes: [
        {
          id: 1, tags: ['Directors'], name: 'Billy Moore', email: 'billy.moore@email.com', title: 'CEO',
          img: 'https://cdn.balkan.app/shared/2.jpg'
        },
        { id: 2, tags: ['Directors'], name: 'Marley Wilson', title: 'Director', img: 'https://cdn.balkan.app/shared/3.jpg' },
        { id: 3, tags: ['Directors'], name: 'Bennie Shelton', title: 'Shareholder', img: 'https://cdn.balkan.app/shared/4.jpg' },

        {
          id: 4, pid: 1, name: 'Billie Rose', email: 'billie.rose@email.com', title: 'Dev Team Lead',
          img: 'https://cdn.balkan.app/shared/5.jpg'
        },

        { id: 5, pid: 1, tags: ['HRs'], name: 'Glenn Bell', title: 'HR', img: 'https://cdn.balkan.app/shared/10.jpg' },
        { id: 6, pid: 1, tags: ['HRs'], name: 'Blair Francis', title: 'HR', img: 'https://cdn.balkan.app/shared/11.jpg' },

        { id: 7, pid: 1, name: 'Skye Terrell', title: 'Manager', img: 'https://cdn.balkan.app/shared/12.jpg' },

        { id: 8, pid: 4, tags: ['Devs'], name: 'Jordan Harris', title: 'JS Developer', img: 'https://cdn.balkan.app/shared/6.jpg' },
        { id: 9, pid: 4, tags: ['Devs'], name: 'Will Woods', title: 'JS Developer', img: 'https://cdn.balkan.app/shared/7.jpg' },
        { id: 10, pid: 4, tags: ['Devs'], name: 'Skylar Parrish', title: 'node.js Developer', img: 'https://cdn.balkan.app/shared/8.jpg' },
        { id: 11, pid: 4, tags: ['Devs'], name: 'Ashton Koch', title: 'C# Developer', img: 'https://cdn.balkan.app/shared/9.jpg' },

        { id: 12, pid: 7, tags: ['Sales'], name: 'Bret Fraser', title: 'Sales', img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 13, pid: 7, tags: ['Sales'], name: 'Steff Haley', title: 'Sales', img: 'https://cdn.balkan.app/shared/14.jpg' }
      ]
    });
  }

}
