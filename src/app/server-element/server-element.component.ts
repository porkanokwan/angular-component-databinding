import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // โดยปกติตัวแปรใน class จะใช้ได้แค่ใน class นั้นไฟล์ภายนอกเรียกไปใช้ไม่ได้ แต่ถ้าเราต้องการให้ภายนอกเรียกใช้ได้ให้เติม @Input นำหน้าตัวแปรนั้น
  @Input('srvElement') element: { name: string; type: string; content: string };
  @Input() name: string;
  // firstName: string = ''; // การสร้างแบบ private ใช้ได้แค่ใน class นั้น

  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor is call');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is call', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit is call');
    console.log('Text Content', this.header?.nativeElement.textContent); // Value = undefined
    console.log('Paragraph Content', this.paragraph?.nativeElement.textContent); // Value = undefined
  }

  ngDoCheck(): void {
    console.log('ngDoCheck is call');
  }

  // ตรวจสอบและถูกเรียกแค่ครั้งเดียว
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is call');
    console.log('Paragraph Content', this.paragraph?.nativeElement.textContent); // Value = Just a test!
  }

  // จะทำต่อหลัง DoCheck
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is call');
  }

  // เราจะสามารถเข้าถึง DOM และใช้ค่าได้ที่ phase นี้ เพราะเป็น phase ที่ Component ถูก render เข้า DOM เสร็จแล้ว
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is call');
    console.log('Text Content', this.header.nativeElement.textContent); // Value = TestServer
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is call');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy is call');
  }
}
