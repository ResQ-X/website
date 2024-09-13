// ENUM VALUES

export enum SavedList {
    orderList = 'orderList',
    invoiceList = 'invoiceList',
    itemList = 'itemList',
    customerList = 'customerList',
    shopList = 'shopList',
    supplierList = 'supplierList',
    expenseList = 'expenseList',
    projectList = 'projectList',
  }
  
  export enum SavedString {
    itemCategoryKey = 'itemCategoryKey',
    expenseCategoryKey = 'expenseCategoryKey',
  }
  
  export enum UserPrefs {
    connectionMode = 'connectionMode',
    priorUse = 'priorUse',
  }
  
  export enum ConnectionMode {
    online = 'online',
    offline = 'offline',
  }
  
  export enum SavedCollections {
    users = 'users',
    shops = 'shops',
    items = 'items',
    suppliers = 'suppliers',
    orders = 'orders',
    invoices = 'invoices',
    expenses = 'expenses',
    customers = 'customers',
    projects = 'projects',
    blogs = 'blogs',
    documents = 'documents',
    locations = 'locations',
    contacts = 'contacts',
    verificationRequests = 'verificationRequests',
    featureRequests = 'featureRequests',
    itemCategories = 'itemCategories',
    expenseCategories = 'expenseCategories',
  }
  
  export enum SavedEntities {
    users = 'users',
    shops = 'shops',
    items = 'items',
    suppliers = 'suppliers',
    orders = 'orders',
    invoices = 'invoices',
    expenses = 'expenses',
    customers = 'customers',
    projects = 'projects',
    blogs = 'blogs',
    documents = 'documents',
    locations = 'locations',
    contacts = 'contacts',
    verificationRequests = 'verificationRequests',
    featureRequests = 'featureRequests',
    itemCategories = 'itemCategories',
    expenseCategories = 'expenseCategories',
  }
  
  export enum SavedFullDataEntities {
    items = 'items',
    orders = 'orders',
    invoices = 'invoices',
    expenses = 'expenses',
  }

  export enum SavedIdentifers{
    usernames = 'usernames',
    devices = 'devices',
  }
  
  export enum UserNameUpdateMessage {
    exist = 'exist',
    invalid = 'invalid',
    updated = 'updated',
    notAdded = 'notAdded',
  }
  
  export enum SavedLogoPaths {
    users = 'users',
    shops = 'shops',
    items = 'items',
    suppliers = 'suppliers',
    customers = 'customers',
    projects = 'projects',
    blogs = 'blogs',
  }
  
  export enum AccessLevels {
    creator = 'creator',
    owner = 'owner',
    admin = 'admin',
    manager = 'manager',
    viewer = 'viewer',
    supervisor = 'supervisor',
    lister = 'lister',
    rep = 'rep',
  }
  
  export enum OrderEntityFields {
    priceQuoted = 'priceQuoted',
    priceSold = 'priceSold',
    totalVat = 'totalVat',
    totalCost = 'totalCost',
    netCost = 'netCost',
    discount = 'discount',
    amountPaid = 'amountPaid',
    balance = 'balance',
  }
  
  export enum FilterDurations {
    today = 'today',
    yesterday = 'yesterday',
    week = 'week',
    sevenDays = 'sevenDays',
    month = 'month',
    thirtyDays = 'thirtyDays',
    year = 'year',
    threeSixtyFiveDays = 'threeSixtyFiveDays',
    all = 'all',
    custom = 'custom',
  }
  
  export enum ExpenseTypes {
    business = 'business',
    personal = 'personal',
    csr = 'csr',
    all = 'all',
    other = 'other',
  }
  
  export enum InvoicePaidForOptions {
    yes = 'yes',
    no = 'no',
    all = 'all',
  }
  