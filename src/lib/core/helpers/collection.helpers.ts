import { SavedCollections } from '../enums/base.enums';
import { firestoreAdmin as fr } from '../../firebase/firebase.admin.config';

//  == GENERAL COLLECTION REFERENCES
let userDocumentsCollection: FirebaseFirestore.CollectionReference;
let userContactCollection : FirebaseFirestore.CollectionReference;
let userLocationCollection : FirebaseFirestore.CollectionReference;
let configCollection : FirebaseFirestore.CollectionReference;
let featureRequestCollection : FirebaseFirestore.CollectionReference;
let userCollection : FirebaseFirestore.CollectionReference;
let identifierCollection : FirebaseFirestore.CollectionReference;
let phonenumberCollection : FirebaseFirestore.CollectionReference;
let phoneNumbersDoc : FirebaseFirestore.DocumentReference;

//  == APP SPECIFIC COLLECTION REFERENCES
let itemCategoryCollection : FirebaseFirestore.CollectionReference;
let expenseCategoryCollection : FirebaseFirestore.CollectionReference;
let shopCollection : FirebaseFirestore.CollectionReference;
let supplierCollection : FirebaseFirestore.CollectionReference;
let itemCollection : FirebaseFirestore.CollectionReference;
let expenseCollection : FirebaseFirestore.CollectionReference;
let orderCollection : FirebaseFirestore.CollectionReference;
let invoiceCollection : FirebaseFirestore.CollectionReference;
let customerCollection : FirebaseFirestore.CollectionReference;
let projectCollection : FirebaseFirestore.CollectionReference;



  //  == GENERAL COLLECTION REFERENCES
  userDocumentsCollection = getCollection('userDocumentsCollection');
  userDocumentsCollection = getCollection('userDocuments');
  userContactCollection = getCollection('userContacts');
  userLocationCollection = getCollection('userLocations');
  configCollection = getCollection('configs');
  featureRequestCollection = getCollection('featureRequests');
  userCollection = getCollection('users');
  identifierCollection = getCollection('identifiers');
  phonenumberCollection = getCollection('phonenumbers');
  phoneNumbersDoc = phonenumberCollection.doc('phonenumbersDoc');

  //  == APP SPECIFIC COLLECTION REFERENCES
  itemCategoryCollection = getCollection('itemCategories');
  expenseCategoryCollection = getCollection('expenseCategories');
  shopCollection = getCollection('shops');
  supplierCollection = getCollection('suppliers');
  itemCollection = getCollection('items');
  expenseCollection = getCollection('expenses');
  orderCollection = getCollection('orders');
  invoiceCollection = getCollection('invoices');
  customerCollection = getCollection('customers');
  projectCollection = getCollection('projects'); 
      



export function getCollection(collectionName: string) : FirebaseFirestore.CollectionReference {
  return fr.collection(collectionName);
}

// ==== COLLECTION SWITCH
export function getCollectionRef(key: SavedCollections): FirebaseFirestore.CollectionReference {
  switch (key) {
      case SavedCollections.users:
          return userCollection;
      case SavedCollections.locations:
          return userLocationCollection;
      case SavedCollections.contacts:
          return userContactCollection;
      case SavedCollections.documents:
          return userDocumentsCollection;
      case SavedCollections.shops:
          return shopCollection;
      case SavedCollections.suppliers:
          return supplierCollection;
      case SavedCollections.items:
          return itemCollection;
      case SavedCollections.orders:
          return orderCollection;
      case SavedCollections.invoices:
          return invoiceCollection;
      case SavedCollections.expenses:
          return expenseCollection;
      case SavedCollections.customers:
          return customerCollection;
      case SavedCollections.projects:
          return projectCollection;
      case SavedCollections.itemCategories:
          return itemCategoryCollection;
      case SavedCollections.expenseCategories:
          return expenseCategoryCollection;
      case SavedCollections.featureRequests:
          return featureRequestCollection;
      case SavedCollections.verificationRequests:
          return featureRequestCollection;
      case SavedCollections.blogs:
          return featureRequestCollection;
      default:
          throw new Error(`====\n\ngetCollectionRef Instance: Invalid collection key: ${key}\n\n====`);
  }
}