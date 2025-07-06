import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HrService } from '../../service/HR/hr-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-attendance',
  standalone: false,
  templateUrl: './view-all-attendance.html',
  styleUrl: './view-all-attendance.css'
})
export class ViewAllAttendance implements OnInit {
  attendance: any;

  constructor(
private hrService: HrService,
private cdr: ChangeDetectorRef,
private router: Router


){}
  ngOnInit(): void {
    this.loadAllAttendance();
  }

   loadAllAttendance(){
this.attendance = this.hrService.getAllAttendance();


  }


getAttenById(id:string): void{

      this.hrService.getAttendanceById(id).subscribe({

      next: (res) => {

      console.log(res,"Id Get Successfully");
      this.router.navigate(['/',id]);    // ekhane kaj baki ase *** 

                    },
      error: (err) => {
      console.log(err);


  }


});


  
  }



  deleteAtten(id: string ): void {

this.hrService.deleteAttendance(id).subscribe({

  next: (res) => {

    this.cdr.reattach();
    this.loadAllAttendance();
  },
  error: (err) => {
    console.log(err);
  }


})

  }

}
