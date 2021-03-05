import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { ExampleService } from 'src/app/services/example.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class C2Component implements OnInit, OnChanges {
  public value: string = 'value';
  @Input() element: string = 'hallo';

  constructor(
    private exampleService: ExampleService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.exampleService.getValue().subscribe((value) => {
      this.value = value;
      this.changeDetectorRef.markForCheck();
    });
    // this.value = this.exampleService.getDirectValue();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }
}
