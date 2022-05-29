import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  @Output() locationViewClose = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onLocationBackClick(): void {
    this.locationViewClose.emit();
  }

}
