import { FormGroup, FormArray } from "@angular/forms";
import { ReactiveFormAssistant } from "./reactiveformsassistant";

/*
A data service that connects the underlining data storage to a reactive form
Typically it will use the current router path as the database key.
The ReactiveFormAssisant can be used to aid the implementation see the examples.
*/

export interface FormAwareData {

    reactiveFormAssistant: ReactiveFormAssistant;
    /**
     * set the current formgroup assocaited with the current router path
     * here so that the dataservice can push/pull data to it.
     */
    setCurrentForm(formGroup: FormGroup);

}


