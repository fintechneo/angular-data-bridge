import { Injectable } from '@angular/core';
import {Router, Resolve,  ActivatedRouteSnapshot,  RouterStateSnapshot} from '@angular/router';
import { FormAwareData } from '../../lib/formawaredata';
import { FormGroup } from '@angular/forms';
import { ReactiveFormAssistant, FormUpdateEvent } from '../../lib/reactiveformsassistant';

@Injectable()
export class LocalFormAwareDataService implements FormAwareData {

    constructor(public reactiveFormAssistant: ReactiveFormAssistant,
                private router: Router) {
    }

    setCurrentForm(formGroup: FormGroup) {

        this.reactiveFormAssistant.formGroup = formGroup;

        this.reactiveFormAssistant.controlsubscribe();
        const path = this.router.routerState.snapshot.url.substr(1).split('?')[0];
        const stored = localStorage.getItem(path);

        const data = JSON.parse(stored ? stored : '{}');

        this.reactiveFormAssistant.patchFormUpdateEvent(
            new FormUpdateEvent([], data)
        );

        this.reactiveFormAssistant.formUpdatesSubject.subscribe((res) => {
            console.log(res);
            res.applyToObject(data);
            localStorage.setItem(path, JSON.stringify(data));
        });
    }
}
