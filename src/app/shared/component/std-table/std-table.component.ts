import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Istd } from '../../const/std';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  stdArray ! : Array<Istd>
  constructor(
    private _stdService: StudentService
  ) { }

  ngOnInit(): void {
    this.stdArray = this._stdService.getStdArray();
    console.log(this.stdArray);
  };

  onEditStd(){
    
  }

  onDeleteStd(stdId: string){
    this._stdService.deleteStd(stdId)
  }

}
