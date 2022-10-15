/**
 * Created by tomas.chour on 12.10.2022.
 */

import {LightningElement, api} from 'lwc';
const TILE_WRAPPER_SELECTED_CLASS = "tile-wrapper selected";
const TILE_WRAPPER_UNSELECTED_CLASS = "tile-wrapper";

export default class ShoppingListItemTile extends LightningElement {
    @api shoppingListItem;
    @api selectedListItemId;
    @api isEditMode = false;

    get backgroundStyle() {
        //return `background-image:url(${this.shoppingListItem.Picture__c})`;
        const url = 'https://domacias-dev-ed.develop.file.force.com/sfc/servlet.shepherd/version/renditionDownload?rendition=ORIGINAL_Jpeg&versionId=0687S0000097aIy&operationContext=CHATTER&contentId=05T7S00000RJbmD';
        return `background-image:url(${url})`;
    }
    get tileClass() {
        console.log('TTTT tile class ', this.shoppingListItem.Id ,this.shoppingListItem.isSelected)
        return this.shoppingListItem.isSelected ? TILE_WRAPPER_SELECTED_CLASS : TILE_WRAPPER_UNSELECTED_CLASS;
    }
    selectTile() {
        const listItemSelect = new CustomEvent("listitemselect", {
            detail: {
                itemId: this.shoppingListItem.Id
            }
        });
        this.dispatchEvent(listItemSelect);
    }

    get isViewMode() {
        return !this.isEditMode;
    }

    handleRemove(evt) {
        evt.stopPropagation();
        const listItemRemove = new CustomEvent("listitemremove", {
            detail: {
                itemId: this.shoppingListItem.Id
            }
        });
        this.dispatchEvent(listItemRemove);
    }
}