import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // as a html element
  // selector: '[app-servers]', // as an attribute
  // selector: '.app-servers', // as a class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
