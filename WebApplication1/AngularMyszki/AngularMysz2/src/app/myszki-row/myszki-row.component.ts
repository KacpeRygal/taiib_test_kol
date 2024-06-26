import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MyszkiResponseDTO } from '../models/myszki';
import { MyszkiService } from '../myszki.service';

@Component({
  selector: '[app-myszki-row]',
  templateUrl: './myszki-row.component.html',
  styleUrl: './myszki-row.component.css'
})
export class MyszkiRowComponent {
  @Input('app-myszki-row') mysz!: MyszkiResponseDTO;
  @Output() choosed = new EventEmitter<MyszkiResponseDTO>();


  private readonly api=inject(MyszkiService);
  submit: any;


  private odswierz():void{
    this.api.get().subscribe();
  }
  public onChooseClick(): void {
    console.log('event: ',event);
    console.log('object: ',this.object);
    this.api.delete(this.mysz.id).subscribe();
  }
  object(arg0: string, object: any) {
    throw new Error('Method not implemented.');
  }
}
