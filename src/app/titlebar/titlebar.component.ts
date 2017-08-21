import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = [
    { name: "archie", values: ["car", "alto", "sandro"] },
    { name: "jake", values: ["acide", "alto", "vetice"] },
    { name: "richard", values: ["banana", "car", "doct"] }
  ];

}
