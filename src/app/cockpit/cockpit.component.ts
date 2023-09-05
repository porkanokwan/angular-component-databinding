import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  // ใช้ local reference ในการเข้าถึง DOM
  @ViewChild('serverContentInput') newServerContentInput: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent,
  //   });
  // }

  //Local Reference
  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput); // <input type="text" class="form-control" #serverNameInput /> ที่มี property ให้เรียกใช้
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContentInput.nativeElement.value,
    });
  }

  // onAddBlueprint(serverNameInput) {
  //   this.blueprintCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent,
  //   });
  // }
  onAddBlueprint(nameInput: HTMLInputElement) {
    console.log(this.newServerContentInput);
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContentInput.nativeElement.value,
    });
  }
}
