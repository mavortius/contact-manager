import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';


import { ContactUpdated, ContactViwed } from "message";
import { WebAPI } from '../web-api';

@autoinject
export class ContactList {
  contacts;
  selectedId = 0;

  constructor(private api: WebAPI, private ea: EventAggregator) {
    ea.subscribe(ContactViwed, msg => this.select(msg.contact));
    ea.subscribe(ContactUpdated, msg => {
      let id = msg.contact.id;
      let found = this.contacts.find(x => x.id == id);

      Object.assign(found, msg.contact);
    });
  }

  created() {
    this.api.getContactList().then(contacts => this.contacts = contacts);
  }

  select(contact) {
    this.selectedId = contact.id;
    return true;
  }
}
