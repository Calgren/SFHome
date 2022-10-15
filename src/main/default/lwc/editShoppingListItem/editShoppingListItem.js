/**
 * Created by tomas.chour on 12.10.2022.
 */

import {LightningElement, api} from 'lwc';

export default class EditShoppingListItem extends LightningElement {

    @api shoppingList;
    @api itemId;

    _hasRendered;
    renderedCallback() {
        if (this._hasRendered) {
            return;
        }
        this._hasRendered = true;
        if (this.itemId) {
            //select
        } else {
            this.initNewItem();
        }

    }
    initNewItem() {

    }


}