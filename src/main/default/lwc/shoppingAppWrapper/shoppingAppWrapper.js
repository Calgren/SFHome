/**
 * Created by tomas.chour on 12.10.2022.
 */

import {LightningElement, track} from 'lwc';

const SHOPPING_LISTS_WRAPPERS = [
    {"Id" : "xxxx1", "Name": "The List 1", "Shop__c": "Lidl", "Category__c" : "Groceries", "Due_Date__c": "21.8.2022"},
    {"Id" : "xxxx2", "Name": "The List 2", "Shop__c": "Mix", "Category__c" : "Mix", "Due_Date__c": "24.10.2022"},
    {"Id" : "xxxx3", "Name": "The List 3", "Shop__c": "Albert", "Category__c" : "Groceries", "Due_Date__c": "21.11.2022"}
];
export default class ShoppingAppWrapper extends LightningElement {

    @track shoppingListsWrappers = SHOPPING_LISTS_WRAPPERS;
    @track selectedList;

    _hasRendered;
    renderedCallback() {
        if (this._hasRendered) {
            return;
        }
        this._hasRendered = true;

    }

    handleListSelect(evt) {
        this.selectedList = this.shoppingListsWrappers.find(shoppingList => shoppingList.Id === evt.currentTarget.dataset.id);
    }

}