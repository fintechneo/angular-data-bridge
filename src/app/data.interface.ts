import { Observable } from "rxjs/Observable";

/**
 * 
 * @interface DataBase
 */
interface DataBase {
    /**
     * Get a reference to a collection document 
     * 
     *    e.g.  
     *    const ref=db.ref("demo1/fintechneo/boardmembers")
     *    ref.subject.subscribe( (data)=> {
     *         // watch data here
     *    })
     * 
     * @param {string} key 
     *      path to the data file
     * @param {boolean} realtime 
     *      true  -- the data is synchronised with the database when ever the local copy changes.
     *      false -- the data is cached local the user must call commit to persist it
     * @returns {SectionRef} 
     * @memberof DataBase
     */
    ref(key:string, realtime: boolean): Ref;
}


/**
 * 
 * @interface Ref
 */
interface Ref {

     /**
     *  An observable that notifies subscribers when the data changes or is first fetched from the database.
     *
     * @returns { Observable<any> } 
     * @memberof DataRef
     */
    subject: Observable<any>;

    /**
     * Updates a primitive value field of the data
     *   
     *  conat ref = db.data("paul") 
     *  const ref.patch("address.street","long ground" }
     * 
     * @param {any} 
     * @memberof DataRef
     */
    patch(path: string, value: string|number|boolean);

    /**
     * Only useful if realtime is false
     * local cached state is persisted to the remote database.
     * @memberof DataRef
     */
    commit();

}
