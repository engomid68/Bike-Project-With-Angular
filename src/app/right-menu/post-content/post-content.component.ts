import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent implements OnInit {

  @Input() title: string = '';
  @Input() picture: string = '';
  @Output() alertInChild = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

  onClickedPostText() {
    this.alertInChild.emit(this.title);
  }

}
