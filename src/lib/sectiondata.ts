import { FormGroup, FormArray } from "@angular/forms";
import { ReactiveFormAssistant } from "./reactiveformsassistant";
import { Observable } from "rxjs/Observable";

/*
 * A data service that allows fetching and watching of data based on a section.
 *
 * A section is like the database key.
 *
 * @export
 * @interface SectionData
 */
export interface SectionData {

     /**
     * Send value updates on the web socket.
     * @param pathArray array of strings forming the object path
     * @param val the value to update
     * @param section the JSON file on the storage
     */
    sendUpdatesByPathArray(pathArray: string[], val: any, section?: string): any ;


    /**
     * Returns an observable that notifies if the data in the section changes. 
     * 
     * @param {string} sectionName 
     * @returns {Observable<any>} 
     * @memberof SectionData
     */
    getSection(sectionName: string): Observable<any>;

}
