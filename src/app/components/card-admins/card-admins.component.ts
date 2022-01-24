import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-admins',
  templateUrl: './card-admins.component.html',
  styleUrls: ['./card-admins.component.scss']
})
export class CardAdminsComponent implements OnInit {

  inviteForm: FormGroup;

  administrators:any =  [
    {
      "image": "https://codeshake.io/wp-content/uploads/2019/04/DSC_1617-e1555593934650.jpg",
      "name": "Onur Dincol"
    },
    {
      "image": "https://codeshake.io/wp-content/uploads/2019/04/DSC_1637-e1555594031580.jpg",
      "name": "Eren Eltutar"
    },
    {
      "image": "https://codeshake.io/wp-content/uploads/2020/03/DSC_1737-1.jpg",
      "name": "Onur Ozan Sahin"
    },
    {
      "image": "https://codeshake.io/wp-content/uploads/2019/03/gijs.jpg",
      "name": "Gijs Stijnman"
    },
    {
      "image": "https://codeshake.io/wp-content/uploads/2019/03/gert-jan.jpg",
      "name": "Gert-Jan van Popering"
    },
    {
      "image": "https://codeshake.io/wp-content/uploads/2019/03/huig.jpg",
      "name": "Huig Ouwehand"
    }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.inviteForm = this.formBuilder.group({
      mail:  ["", Validators.compose([Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/)])],
    });
  }
  saveForm(){
    if (this.inviteForm.valid) {
      this.toastr.success(this.inviteForm.value.mail + ' a davet gönderilmiştir.', 'Successfull');
      this.inviteForm.reset();
    }

  }
}
