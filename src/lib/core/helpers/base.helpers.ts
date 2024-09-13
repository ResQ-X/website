import { ResponseHandler } from "../entities/response_handler.entity";
import { VerificationRequestEntity } from "@/modules/general/verification_request/entities/verification_request.entity";
import { BlogEntity } from "@/modules/blog/entities/blog.entity";
import { ShopEntity } from "@/modules/shop/entities/shop.entity";
import { CustomerEntity } from "@/modules/customer/entities/customer.entity";
import { SupplierEntity } from "@/modules/supplier/entities/supplier.entity";
import { ItemEntity } from "@/modules/item/entities/item.entity";
import { OrderEntity } from "@/modules/order/entities/order.entity";
import { InvoiceEntity } from "@/modules/invoice/entities/invoice.entity";
import { ExpenseEntity } from "@/modules/expense/entities/expense.entity";
import { ProjectEntity } from "@/modules/project/entities/project.entity";

import { ExpenseTypes, InvoicePaidForOptions, OrderEntityFields, SavedCollections, SavedEntities, SavedIdentifers, SavedLogoPaths } from "../enums/base.enums";
import { UserEntity } from "@/modules/general/user/entities/user.entity";
import { CategoryEntity } from "@/modules/shop/entities/category_entity";
import { BLOGS, BLOGUID, CATEGORYUID, CONTACTS, CUSTOMERS, CUSTOMERUID, DOCUMENTS, EXPENSECATEGORIES, EXPENSES, EXPENSEUID, FEATUREREQUESTS, INVOICES, INVOICEUID, ITEMCATEGORIES, ITEMS, ITEMUID, LOCATIONS, ORDERS, ORDERUID, PROJECTS, PROJECTUID, REQUESTUID, SHOPS, SHOPUID, SUPPLIERS, SUPPLIERUID, USERS, USERUID, VERIFICATIONREQUESTS } from "@/lib/core/constants";
import { FeatureRequestEntity } from "@/modules/general/feature_request/entities/feature_request.entity";
import { CollectionReference } from "firebase/firestore";

// GET ENTITY DATA

class EntityData {
    collection: string;
    type: any;
    module: string;
  
    constructor({
      collection,
      type,
      module
    }: {
      collection: string;
      type: any;
      module: string;
    }) {
      this.collection = collection;
      this.type = type;
      this.module = module;
    }
  }
 export function getEntityData(key: SavedEntities): EntityData {
    switch (key) {
      case SavedEntities.users:
        return new EntityData({
          collection: USERS,
          type: UserEntity,
          module: USERS
        });
      /* case SavedEntities.locations:
        return new EntityData({
          collection: LOCATIONS,
          type: LocationEntity,
          module: LOCATIONS
        });
      case SavedEntities.contacts:
        return new EntityData({
          collection: CONTACTS,
          type: ContactEntity,
          module: CONTACTS
        });
      case SavedEntities.documents:
        return new EntityData({
          collection: DOCUMENTS,
          type: DocumentsEntity,
          module: DOCUMENTS
        }); */
      case SavedEntities.shops:
        return new EntityData({
          collection: SHOPS,
          type: ShopEntity,
          module: SHOPS
        });
      case SavedEntities.suppliers:
        return new EntityData({
          collection: SUPPLIERS,
          type: SupplierEntity,
          module: SUPPLIERS
        });
      case SavedEntities.items:
        return new EntityData({
          collection: ITEMS,
          type: ItemEntity,
          module: ITEMS
        });
      case SavedEntities.orders:
        return new EntityData({
          collection: ORDERS,
          type: OrderEntity,
          module: ORDERS
        });
      case SavedEntities.invoices:
        return new EntityData({
          collection: INVOICES,
          type: InvoiceEntity,
          module: INVOICES
        });
      case SavedEntities.expenses:
        return new EntityData({
          collection: EXPENSES,
          type: ExpenseEntity,
          module: EXPENSES
        });
      case SavedEntities.customers:
        return new EntityData({
          collection: CUSTOMERS,
          type: CustomerEntity,
          module: CUSTOMERS
        });
      case SavedEntities.projects:
        return new EntityData({
          collection: PROJECTS,
          type: ProjectEntity,
          module: PROJECTS
        });
      case SavedEntities.itemCategories:
        return new EntityData({
          collection: ITEMCATEGORIES,
          type: CategoryEntity,
          module: ITEMCATEGORIES
        });
      case SavedEntities.expenseCategories:
        return new EntityData({
          collection: EXPENSECATEGORIES,
          type: CategoryEntity,
          module: EXPENSECATEGORIES
        });
      case SavedEntities.featureRequests:
        return new EntityData({
          collection: FEATUREREQUESTS,
          type: FeatureRequestEntity,
          module: FEATUREREQUESTS
        });
      case SavedEntities.verificationRequests:
        return new EntityData({
          collection: VERIFICATIONREQUESTS,
          type: VerificationRequestEntity,
          module: VERIFICATIONREQUESTS
        });
      case SavedEntities.blogs:
        return new EntityData({
          collection: BLOGS,
          type: BlogEntity,
          module: BLOGS
        });
      default:
        throw new Error(`====\n\ngetCollectionRef Instance: Invalid collection key: ${key}\n\n====`);
    }
  }

// ==== MODELS TYPE SWITCH
  export function getEntity(key: SavedEntities): any {
    switch (key) {
        case SavedEntities.users:
            return UserEntity;
        case SavedEntities.shops:
            return ShopEntity;
        case SavedEntities.customers:
            return CustomerEntity;
        case SavedEntities.suppliers:
            return SupplierEntity;
        case SavedEntities.items:
            return ItemEntity;
        case SavedEntities.orders:
            return OrderEntity;
        case SavedEntities.invoices:
            return InvoiceEntity;
        case SavedEntities.expenses:
            return ExpenseEntity;
        case SavedEntities.projects:
            return ProjectEntity;
        case SavedEntities.itemCategories:
            return CategoryEntity;
        case SavedEntities.expenseCategories:
            return CategoryEntity;
        case SavedEntities.featureRequests:
            return FeatureRequestEntity;
        case SavedEntities.verificationRequests:
            return VerificationRequestEntity;
        case SavedEntities.blogs:
            return BlogEntity;
        default:
            throw new Error(`====\n\ngetEntity Instance: Invalid model key: ${key}\n\n====`);
    }
}

// ==== MODELS TYPE SWITCH
export function getUidField(key: SavedEntities): string {
    switch (key) {
        case SavedEntities.users:
            return USERUID;
        case SavedEntities.shops:
            return SHOPUID;
        case SavedEntities.customers:
            return CUSTOMERUID;
        case SavedEntities.suppliers:
            return SUPPLIERUID;
        case SavedEntities.items:
            return ITEMUID;
        case SavedEntities.orders:
            return ORDERUID;
        case SavedEntities.invoices:
            return INVOICEUID;
        case SavedEntities.expenses:
            return EXPENSEUID;
        case SavedEntities.projects:
            return PROJECTUID;
        case SavedEntities.itemCategories:
            return CATEGORYUID;
        case SavedEntities.expenseCategories:
            return CATEGORYUID;
        case SavedEntities.verificationRequests:
            return REQUESTUID;
        case SavedEntities.blogs:
            return BLOGUID;
        default:
            throw new Error(`====\n\ngetEntity Instance: Invalid model key: ${key}\n\n====`);
    }
}


// ==== MODELS TYPE SWITCH
export function getIdentifierField(key: SavedIdentifers): string {
    switch (key) {
        case SavedIdentifers.usernames:
            return USERUID;
        case SavedIdentifers.devices:
            return SHOPUID;
            default:
                throw new Error(`====\n\ngetIdentifierField Instance: Invalid model key: ${key}\n\n====`);
        }
    }

// ==== COLLECTION SWITCH
export function getLogoStorageRef(key: SavedLogoPaths): string {
    switch (key) {
        case SavedLogoPaths.users:
            return SavedLogoPaths.users;
        case SavedLogoPaths.shops:
            return SavedLogoPaths.shops;
        case SavedLogoPaths.suppliers:
            return SavedLogoPaths.suppliers;
        case SavedLogoPaths.items:
            return SavedLogoPaths.items;
        case SavedLogoPaths.customers:
            return SavedLogoPaths.customers;
        case SavedLogoPaths.projects:
            return SavedLogoPaths.projects;
        case SavedLogoPaths.blogs:
            return SavedLogoPaths.blogs;
        default:
            throw new Error(`====\n\ngetLogoStorageRef Instance: Invalid SavedLogoPaths key: ${key}\n\n====`);
    }
}

// === DATA PATHS WHERE BACKUP DATA ARE SAVED ON DEVICES

export function getDataPath(collectionKey: SavedCollections): string {
    let dataPath = '';
    switch (collectionKey) {
        case SavedCollections.items:
            dataPath = 'items';
            break;
        case SavedCollections.customers:
            dataPath = 'customers';
            break;
        case SavedCollections.orders:
            dataPath = 'orders';
            break;
        case SavedCollections.expenses:
            dataPath = 'expenses';
            break;
        case SavedCollections.invoices:
            dataPath = 'invoices';
            break;
        case SavedCollections.projects:
            dataPath = 'projects';
            break;
        case SavedCollections.suppliers:
            dataPath = 'suppliers';
            break;
        default:
            throw new Error(`====\n\ngetDataPath Instance: Invalid SavedCollections key: ${collectionKey}\n\n====`);
    }
    return dataPath;
}

// ==== MODELS FIELDS ON THE SHOP MODEL WHERE THE DATA BACKUP URL IS SAVED

export function  getEntityField(collectionKey: SavedCollections): string {
    let field = '';
    switch (collectionKey) {
        case SavedCollections.items:
            field = 'itemsBackupUrl';
            break;
        case SavedCollections.customers:
            field = 'customersBackupUrl';
            break;
        case SavedCollections.orders:
            field = 'ordersBackupUrl';
            break;
        case SavedCollections.expenses:
            field = 'expensesBackupUrl';
            break;
        case SavedCollections.invoices:
            field = 'invoicesBackupUrl';
            break;
        case SavedCollections.projects:
            field = 'projectsBackupUrl';
            break;
        case SavedCollections.suppliers:
            field = 'suppliersBackupUrl';
            break;
        default:
            throw new Error(`====\n\ngetEntityField Instance: Invalid SavedCollections key: ${collectionKey}\n\n====`);
    }
    return field;
}

export function  getShopProperty(collectionKey: SavedCollections, shop: ShopEntity): string {
    let field = '';
    switch (collectionKey) {
        case SavedCollections.items:
            field = shop.itemsBackupUrl!.toString();
            break;
        case SavedCollections.customers:
            field = shop.customersBackupUrl!.toString();
            break;
        case SavedCollections.orders:
            field = shop.ordersBackupUrl!.toString();
            break;
        case SavedCollections.expenses:
            field = shop.expensesBackupUrl!.toString();
            break;
        case SavedCollections.invoices:
            field = shop.invoicesBackupUrl!.toString();
            break;
        case SavedCollections.projects:
            field = shop.projectsBackupUrl!.toString();
            break;
        case SavedCollections.suppliers:
            field = shop.suppliersBackupUrl!.toString();
            break;
        default:
            throw new Error(`====\n\ngetShopProperty Instance: Invalid SavedCollections key: ${collectionKey}\n\n====`);
    }
    return field;
}

export function getOrderProperty(orderFieldKey: OrderEntityFields, order: OrderEntity): string {
    let field = '';
    switch (orderFieldKey) {
        case OrderEntityFields.priceQuoted:
            field = order.priceQuoted!.toString();
            break;
        case OrderEntityFields.priceSold:
            field = order.priceSold!.toString();
            break;
        case OrderEntityFields.totalVat:
            field = order.totalVat!.toString();
            break;
        case OrderEntityFields.totalCost:
            field = order.totalCost!.toString();
            break;
        case OrderEntityFields.netCost:
            field = order.netCost!.toString();
            break;
        case OrderEntityFields.discount:
            field = order.discount!.toString();
            break;
        case OrderEntityFields.amountPaid:
            field = order.amountPaid!.toString();
            break;
        case OrderEntityFields.balance:
            field = order.balance!.toString();
            break;
        default:
            throw new Error(`====\n\ngetOrderProperty Instance: Invalid OrderEntityFields key: ${orderFieldKey}\n\n====`);
    }
    return field;
}

export function  getExpenseType(expenseKey: ExpenseTypes): string {
    let type = '';
    switch (expenseKey) {
        case ExpenseTypes.personal:
            type = 'Business';
            break;
        case ExpenseTypes.business:
            type = 'Personal';
            break;
        case ExpenseTypes.csr:
            type = 'CSR';
            break;
        case ExpenseTypes.all:
            type = 'All';
            break;
        case ExpenseTypes.other:
            type = 'Other';
            break;
        default:
            throw new Error(`====\n\ngetExpenseType Instance: Invalid ExpenseTypes key: ${expenseKey}\n\n====`);
    }
    return type;
}

export function   getInvoicePaidForOption(invoicePaidForKey: InvoicePaidForOptions): string {
    let option = 'false';
    switch (invoicePaidForKey) {
        case InvoicePaidForOptions.yes:
            option = 'true';
            break;
        case InvoicePaidForOptions.no:
            option = 'false';
            break;
        case InvoicePaidForOptions.all:
            option = 'all';
            break;
        default:
            throw new Error(`====\n\ngetInvoicePaidForOption Instance: Invalid InvoicePaidForOptions key: ${invoicePaidForKey}\n\n====`);
    }
    return option;
}




