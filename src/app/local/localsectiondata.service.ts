import { Injectable } from '@angular/core';
import { SectionData } from '../../lib/sectiondata';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


class MyCache {
    sectionsData: any;
    sectionsSubject: BehaviorSubject<any>;
}

@Injectable()
export class LocalSectionDataService implements SectionData {

    cache = {};

    sendUpdatesByPathArray(pathArray: string[], value: any, section?: string) {


        const cache = this.cache[section];

        if (cache) {
            let data = cache.sectionsData;

            if (pathArray.length === 0) {
                data = value;
            } else {
                pathArray.reduce((p, curr, ndx, arr) => {
                    if (ndx === arr.length - 1) {
                        p[curr] = value;
                    } else if (p[curr] && value === null) {
                        delete p[curr];
                    } else if (!p[curr]) {
                        p[curr] = {};
                    }
                    return p[curr];
                },
                    data as any
                );
            }

            localStorage.setItem(section, JSON.stringify(data));

        }


        getSection(sectionName: string): Observable < any > {

            if(this.sectionsSubject[sectionName]) {
                return this.sectionsSubject[sectionName];
            }

        const data = localStorage.getItem(sectionName);
            this.sectionsData[sectionName] = data;
            this.sectionsSubject[sectionName] = new BehaviorSubject<any>(data);
            return this.sectionsSubject[sectionName];

        }
    }
}