/**
 * Created by tomas.chour on 12.10.2022.
 */

import {LightningElement, track} from 'lwc';

export default class ShoppingAppWrapper extends LightningElement {

    @track shoppingListsWrappers = [];
    @track selectedList;

    _hasRendered;
    renderedCallback() {
        if (this._hasRendered) {
            return;
        }
        this._hasRendered = true;

    }



}