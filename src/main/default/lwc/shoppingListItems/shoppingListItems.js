/**
 * Created by tomas.chour on 12.10.2022.
 */

import {LightningElement, api, track} from 'lwc';

const SHOPPING_LIST_ITEMS = [
    {"Id" : "xxxx1", "Name": "Item 1", "Quantity__c" : 1},
    {"Id" : "xxxx2", "Name": "Item 2", "Quantity__c" : 3},
    {"Id" : "xxxx3", "Name": "Item 3", "Quantity__c" : 2},
    {"Id" : "xxxx4", "Name": "Item 4", "Quantity__c" : 1},
    {"Id" : "xxxx5", "Name": "Item 5", "Quantity__c" : 3},
    {"Id" : "xxxx6", "Name": "Item 6", "Quantity__c" : 2},
    {"Id" : "xxxx7", "Name": "Item 7", "Quantity__c" : 3},
    {"Id" : "xxxx8", "Name": "Item 8", "Quantity__c" : 2},
];

export default class ShoppingListItems extends LightningElement {
    @api shoppingList;
    @track shoppingListItems = SHOPPING_LIST_ITEMS;

    get listIconClasses() {
        return 'list-icon ' + this.shoppingList.Category__c.toLowerCase();
    }

    handleItemSelect(evt) {
        const theItem = this.shoppingListItems.find(listItem => listItem.Id === evt.detail.itemId);
        theItem.isSelected = !theItem.isSelected;
        this.shoppingListItems = JSON.parse(JSON.stringify(this.shoppingListItems));
    }

    handleItemRemove(evt) {
        const index = this.shoppingListItems.findIndex(listItem => listItem.Id === evt.detail.itemId);
        if (index !== -1) {
            this.shoppingListItems.splice(index, 1);
        }
    }

}