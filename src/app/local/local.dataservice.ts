// /*
//  *  Copyright 2010-2016 FinTech Neo AS ( fintechneo.com )- All rights reserved
//  */

// import { Injectable } from '@angular/core';
// import { ReactiveFormAssistant, FormUpdateEvent } from 'fintechneo-angulartemplates';
// import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
// import { ShareHolderDataService } from './shareholderdata.service';
// import { Person } from '../person';

// @Injectable()
// export class DummyDataService extends ShareHolderDataService  {
//     username: string= "developer@gamil.com";
//     authenticated: Boolean = false;
//     currentRouteSection: string;
    

//     set reactiveFormAssistant(reactiveFormAssistant: ReactiveFormAssistant) {
        
//         const stored = localStorage.getItem(this.currentRouteSection);
//         const data = JSON.parse(stored ? stored : '{}')

//         reactiveFormAssistant.patchFormUpdateEvent(
//             new FormUpdateEvent([], data)
//         );
 
        
//         reactiveFormAssistant.formUpdatesSubject.subscribe((res) => {
//             console.log(res)
//             const  str = localStorage.getItem(this.currentRouteSection)
//             let  item = JSON.parse(str)
//             if (!item) {
//                 item = {}
//             }
//             item[res.path[0]] = res.value
//             localStorage.setItem(this.currentRouteSection, JSON.stringify(item))
//         })


//     }


//      /**
//      * Automatically connect route in URL to JSON document in the backend
//      * @param route
//      * @param state
//      */
//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
//         this.currentRouteSection = state.url.substr(1).split('?')[0];
//         return this;
//     }

// }
