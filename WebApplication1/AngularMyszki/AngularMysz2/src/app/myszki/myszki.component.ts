import { Component } from '@angular/core';
import { MyszkiResponseDTO } from '../models/myszki';
import { MyszkiService } from '../myszki.service';

@Component({
  selector: 'app-myszki',
  templateUrl: './myszki.component.html',
  styleUrl: './myszki.component.css'
})
export class MyszkiComponent {
  public data:MyszkiResponseDTO[]=[];
  public isTableView: boolean = true;
  public choosedMysz?: MyszkiResponseDTO = undefined;

  constructor(private myszkiService: MyszkiService){
    this.getData();
  }

  private getData():void{
    this.myszkiService.get().subscribe({
      next: (res)=>{
        this.data=res;
      },
      error: (err) => console.error(err),
      complete: () => console.log('complete')
    })
  }
  public onSubmit(): void {
    this.choosedMysz = undefined;
    this.getData();
  }

  public onChoosedRow(event: MyszkiResponseDTO): void {
    this.choosedMysz = event;
    
  }

  public onDataStyleChange(): void {
    this.isTableView = !this.isTableView;
  }
}
