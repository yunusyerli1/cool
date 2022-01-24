import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  cardLocations:Array<any>;
  branchForm: FormGroup;
  onlyNumberPattern:string = "^[0-9]*$";
  today: string;
  uploadMessage: string;
  public fileSizeLimit = 10;
  imageUrl:string;


  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.dataService.headerTitle = data.title);
    this.dataService.headerSubtitle = 'Get summary of your recent usage & insights';
    this.cardLocations=this.dataService.locations;
    this.createForm();
    this.today = new Date().toISOString().split('T')[0];
  }
 
  createForm(){
    const params = {
      branchName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      licenceNumber: ["", Validators.compose([Validators.required, Validators.pattern(this.onlyNumberPattern)])],
      //enrollmentDate: [],
      document: ["", [Validators.required]],
      examCheck: [false],
      monitoringCheck: [false],
      libraryCheck: [false]

    }
    this.branchForm = this.formBuilder.group(params);
  }

  saveForm() {
    if (this.branchForm.valid) {
      this.closeModal();

      const params:any = {
        image: this.imageUrl,
        licences: this.branchForm.value.licenceNumber,
        name: this.branchForm.value.branchName,
        products:{
          monitoring: this.branchForm.value.monitoringCheck,
          exams: this.branchForm.value.examCheck,
          applicationLibrary: this.branchForm.value.libraryCheck,
        },
        enrollmentDate: (Date.now()/1000),
      }

      this.dataService.locations.push(params);
      this.toastr.success('Location has been added.', 'Successfull');
      this.branchForm.reset();

    }
  }

  public async onFileSelected(event) {
    const file = await <File>event.target.files[0];
    if (this.isFileAllowed(file.name)) {
      if (this.isFileSizeAllowed(file.size)) {
            await this.uploadDoc(file);  
      } else {
        this.uploadMessage= "Document size that has been uploaded must be " + this.fileSizeLimit + " MB.";
      }
    } else {
      this.uploadMessage= "Document type that has been uploaded must be PNG, JPG, JPEG, SVG";
    }

  }

  public async uploadDoc(file){
    const fd = new FormData();
    fd.append('file', file, file.name);
    fd.append("upload_preset", environment.CLOUDINARY_UPLOAD_PRESET);
    this.dataService.upload(fd).subscribe(response=> {
      if(response) this.imageUrl = response.url;
    })
  }

  isFileAllowed(fileName: string) {
    let isFileAllowed = false;
    const allowedFiles = ['.jpg', '.jpeg', '.png', '.svg'];
    const regex = /(?:\.([^.]+))?$/;
    const extension = regex.exec(fileName);
    if (undefined !== extension && null !== extension) {
      for (const ext of allowedFiles) {
        if (ext === extension[0]) {
          isFileAllowed = true;
        }
      }
    }
    return isFileAllowed;
  }

  isFileSizeAllowed(size) {
    let isFileSizeAllowed = false;
    if (size < this.fileSizeLimit * 1000000) {
      isFileSizeAllowed = true;
    }
    return isFileSizeAllowed;

  }

  closeModal() {
    const modal = document.getElementById('saveButton');
    modal.setAttribute("data-bs-dismiss", "modal");
    modal.click();
    event.preventDefault();
    modal.removeAttribute("data-bs-dismiss");
  }

}
