import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class PartSearchService {
  constructor() { }

   partSearchForm: FormGroup = new FormGroup({
    partNumber: new FormControl(""),
    legacyPartNumber: new FormControl(""),
    partDescription: new FormControl(""),
    documentNumber: new FormControl(""),
    legacyDocumentNumber: new FormControl(""),
    partStatus:new FormControl("1"),
    partType: new FormControl("1")
  });

  initializeFormGroup() {
    this.partSearchForm.setValue({
      $key: null,
      partNumber: "",
      legacyPartNumber: "",
      partDescription: "",
      documentNumber: "",
      legacyDocumentNumber: "",

    });
  }
}
