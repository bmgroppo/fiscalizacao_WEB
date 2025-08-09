import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-paginator',
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent implements OnInit {


  @Input({ required: true }) pagination: any = {
    currentPage: 1, totalPages: 3, pageSize: 10
  }
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  correteImplamentation: boolean = true;

  ngOnInit() {
    if (this.pageChange.observers.length === 0) {
      this.correteImplamentation = false
      console.warn('PaginatorComponent: pageChange output deve ser implementado!');
    }
  }


  changePage(page: number) {
    this.pageChange.emit(page);
  }

}
