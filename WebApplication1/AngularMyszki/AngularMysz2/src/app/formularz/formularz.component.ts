import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MyszkiRequestDTO } from '../models/request';
import { MyszkiService } from '../myszki.service';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrl: './formularz.component.css'
})
export class FormularzComponent {
@Output() submit = new EventEmitter<void>();
@Output() cancel=new EventEmitter<void>();

public object: MyszkiRequestDTO={
  model: null,
  dpi:null
};

private readonly api=inject(MyszkiService);

public onSubmit(event: any):void{
  console.log('event: ',event);
  console.log('object: ',this.object);

  this.api.post(this.object).subscribe({
    next: () =>{
      console.log('dodano mysz');
      this.submit.emit();
    },
    error: (err)=>console.error(err)
  })
}

}
