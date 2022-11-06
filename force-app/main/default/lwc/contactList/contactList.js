import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
const COLUMNS = [
    { label: 'Contact First Name', fieldName: FIRST_NAME.fieldApiName, type: 'text' },
    { label: 'Contact Last Name', fieldName: LAST_NAME.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: EMAIL.fieldApiName, type: 'email' }
];
export default class contactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    Contacts;
    get errors() {
        return (this.Contacts.error) ?
            reduceErrors(this.Contacts.error) : [];
    }
}