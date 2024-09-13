import { AccessLevels, SavedEntities, SavedLogoPaths } from '../enums/base.enums';
import { ResponseHandler } from '../entities/response_handler.entity';
import * as bh from '../helpers/base.helpers';
import { SHOPS, ARCHIVE, TRUE, FALSE } from '@/lib/core/constants';
import { EQUALS, ARRAYCONTAINS, CREATORUID, LISTERS, MANAGERS, REPS, SHOPUID, OK, SUCCESS, IN, LOGOS, BACKUPS } from '../constants';
import { getDownloadURL, getStorage } from 'firebase-admin/storage';
import * as ld from 'lodash';
import { firestoreAdmin as fr, serverAuth } from '../../firebase/firebase.admin.config';
import { UserRecord } from 'firebase-admin/auth';
import { ShopEntity } from '../../../modules/shop/entities/shop.entity';


export function   getWhereClause(accessLevel: string): [string, FirebaseFirestore.WhereFilterOp] {
  let field = CREATORUID;
  let operator: FirebaseFirestore.WhereFilterOp = EQUALS;

  if (accessLevel === AccessLevels.creator) {
    field = CREATORUID;
    operator = EQUALS;
    
  } else if (accessLevel === AccessLevels.manager) {
    field = MANAGERS;
    operator = ARRAYCONTAINS;
  }
  else if (accessLevel === AccessLevels.rep) {
    field = REPS;
    operator = ARRAYCONTAINS;
  }
  else {
    field = LISTERS;
    operator = ARRAYCONTAINS;
  }
  
  return [field, operator];
}

// ADD
export async function add(data: {
  entityKey: SavedEntities;
  model: any;
  uid: string;
}): Promise<ResponseHandler> {
    const collectionPath = bh.getEntityData(data.entityKey).collection;
    const collection : FirebaseFirestore.CollectionReference = fr.collection(collectionPath); 

    return await collection.doc(data.uid).set(data.model).then(() => {
      return  new ResponseHandler({
        statusCode: 201,
        code: OK,
        message: SUCCESS,
        timestamp: new Date().toISOString(),
        data: true,
      });
    }).catch((e) => {
      return new ResponseHandler({
        statusCode: 500,
        code: ld.isString(e.code) ? e.code : ''+e.code,
        message: e.message,
        timestamp: new Date().toISOString(),
        data: false
      });
    });
}

export async function createCategory(data: {
  entityKey: SavedEntities;
  model: any;
  uid: string;
}): Promise<ResponseHandler> {
    const collectionPath = bh.getEntityData(data.entityKey).collection;
    const collection : FirebaseFirestore.CollectionReference = fr.collection(collectionPath); 

    return await collection.doc(data.uid).set(data.model).then(() => {
      return  new ResponseHandler({
        statusCode: 201,
        code: OK,
        message: SUCCESS,
        timestamp: new Date().toISOString(),
        data: true,
      });
    }).catch((e) => {
      return new ResponseHandler({
        statusCode: 500,
        code: ld.isString(e.code) ? e.code : ''+e.code,
        message: e.message,
        timestamp: new Date().toISOString(),
        data: false
      });
    });
}

export async function updateModel(data: {
  entityKey: SavedEntities;
  model: any;
  uid: string;
}): Promise<ResponseHandler> {
  const collectionPath = bh.getEntityData(data.entityKey).collection;
  const collection : FirebaseFirestore.CollectionReference = fr.collection(collectionPath); 

  return await collection.doc(data.uid).update(data.model).then(() => {
    return  new ResponseHandler({
      statusCode: 201,
      code: OK,
      message: SUCCESS,
      timestamp: new Date().toISOString(),
      data: true,
    });
  }).catch((e) => {
    return new ResponseHandler({
      statusCode: 500,
      code: ld.isString(e.code) ? e.code : ''+e.code,
      message: e.message,
      timestamp: new Date().toISOString(),
      data: false
    });
  });
}

export async function updateData(prams: {
  entityKey: SavedEntities;
  data: Record<string, any>;
  uid: string;
}): Promise<ResponseHandler> {
  const collectionPath = bh.getEntityData(prams.entityKey).collection;
  const collection : FirebaseFirestore.CollectionReference = fr.collection(collectionPath); 

  return await collection.doc(prams.uid).update(prams.data).then(() => {
      return  new ResponseHandler({
        statusCode: 201,
        code: OK,
        message: SUCCESS,
        timestamp: new Date().toISOString(),
        data: true,
      });
    }).catch((e) => {
      return new ResponseHandler({
        statusCode: 500,
        code: ld.isString(e.code) ? e.code : ''+e.code,
        message: e.message,
        timestamp: new Date().toISOString(),
        data: false
      });
    });
}

export async function archive(data: {
  entityKey: SavedEntities;
  uid: string;
}): Promise<ResponseHandler> {
  const collectionPath = bh.getEntityData(data.entityKey).collection;
  const collection : FirebaseFirestore.CollectionReference = fr.collection(collectionPath); 

  const response  = await updateData({entityKey: data.entityKey, data: { [ARCHIVE]: TRUE }, uid: data.uid});
  return response;
}

export async function unArchive(data: {
  entityKey: SavedEntities;
  uid: string;
}): Promise<ResponseHandler> {
  const response  = await updateData({entityKey: data.entityKey, data: { [ARCHIVE]: FALSE }, uid: data.uid});
  return response;
}

export async function deleteEntity(data: {
  entityKey: SavedEntities;
  uid: string;
}): Promise<ResponseHandler> {
  const collectionPath = bh.getEntityData(data.entityKey).collection;
  const collection : FirebaseFirestore.CollectionReference = fr.collection(collectionPath); 

  return await collection.doc(data.uid).delete().then(() => {
    return  new ResponseHandler({
      statusCode: 201,
      code: OK,
      message: SUCCESS,
      timestamp: new Date().toISOString(),
      data: true,
    });
  }).catch((e) => {
    return new ResponseHandler({
      statusCode: 500,
      code: ld.isString(e.code) ? e.code : ''+e.code,
      message: e.message,
      timestamp: new Date().toISOString(),
      data: false
    });
  });
}

export async function findByUid(data: {
  entityKey: SavedEntities;
  uid: string;
}): Promise<ResponseHandler> {
  const collectionPath = bh.getEntityData(data.entityKey).collection;
  const collection : FirebaseFirestore.CollectionReference = fr.collection(collectionPath); 
  const model: any = bh.getEntityData(data.entityKey).type;

  try{
    const snapshot = await collection.doc(data.uid).get();
    const entity = new model(snapshot.data())

    return new ResponseHandler({
      statusCode: 200,
      code: OK,
      message: SUCCESS,
      timestamp: new Date().toISOString(),
      data: entity,
    });
  }
  catch (e: any){
    return new ResponseHandler({
      statusCode: 500,
      code: ld.isString(e.code) ? e.code : ''+e.code,
      message: e.message,
      timestamp: new Date().toISOString(),
      data: null,
    }); 
  }
}

export async function findByEmail(data: {
  entityKey: SavedEntities;
  email: string;
}): Promise<ResponseHandler> {
    const model: any = bh.getEntityData(data.entityKey).type;

    try{
      const user : Promise<UserRecord> =  serverAuth.getUserByEmail(data.email);
      return new ResponseHandler({
        statusCode: 201,
        code: OK,
        message: SUCCESS,
        timestamp: new Date().toISOString(),
        data: user,
      });
    } 
    catch (e: any){
      return new ResponseHandler({
        statusCode: 500,
        code: ld.isString(e.code) ? e.code : ''+e.code,
        message: e.message,
        timestamp: new Date().toISOString(),
        data: null,
      }); 
    }
}

export async function findByShopUid(data: {
  entityKey: SavedEntities;
  shopUid: string;
}): Promise<ResponseHandler> {
  const collectionPath = bh.getEntityData(data.entityKey).collection;
  const collection : FirebaseFirestore.CollectionReference = fr.collection(collectionPath); 
  const model: any = bh.getEntityData(data.entityKey).type;

    try{
      const snapshot = await collection.where(SHOPUID, EQUALS, data.shopUid).get();
      const list =  snapshot.docs.map((doc) => new model(doc.data()));
      const entity = list[0];
       
      return new ResponseHandler({
        statusCode: 201,
        code: OK,
        message: SUCCESS,
        timestamp: new Date().toISOString(),
        data: entity,
      });
    }
    catch (e: any){
      return new ResponseHandler({
        statusCode: 500,
        code: ld.isString(e.code) ? e.code : ''+e.code,
        message: e.message,
        timestamp: new Date().toISOString(),
        data: null,
      }); 
    }
}

export async function findShopList(data: {
  userUid: string;
  accessLevel: AccessLevels;
}): Promise<ResponseHandler> {
  const collection : FirebaseFirestore.CollectionReference = fr.collection(SHOPS); 

  try{
    const [field, operator] = getWhereClause(data.accessLevel);
    const snapshot = await collection.where(field, operator, data.userUid).get().then((list) => list.docs.map((doc) => new ShopEntity(doc.data())));
    return new ResponseHandler({
      statusCode: 200,
      code: OK,
      message: SUCCESS,
      timestamp: new Date().toISOString(),
      data: snapshot,
    });
  }
  catch (e: any){
    return new ResponseHandler({
      statusCode: 500,
      code: ld.isString(e.code) ? e.code : ''+e.code,
      message: e.message,
      timestamp: new Date().toISOString(),
      data: null,
    }); 
  }
}

export async function findList(data: {
  entityKey: SavedEntities;
  shopUid: string;
}): Promise<ResponseHandler> {
  const collectionPath = bh.getEntityData(data.entityKey).collection;
  const collection : FirebaseFirestore.CollectionReference = fr.collection(collectionPath);
  const model: any = bh.getEntityData(data.entityKey).type;

  try{
    const snapshot = await collection.where(SHOPUID, EQUALS, data.shopUid).get().then((list) => list.docs.map((doc) => new model(doc.data())));
    return new ResponseHandler({
      statusCode: 200,
      code: OK,
      message: SUCCESS,
      timestamp: new Date().toISOString(),
      data: snapshot,
    });
  }
  catch (e: any){
    return new ResponseHandler({
      statusCode: 500,
      code: ld.isString(e.code) ? e.code : ''+e.code,
      message: e.message,
      timestamp: new Date().toISOString(),
      data: null,
    }); 
  }
}

export async function findAll(entityKey: SavedEntities): Promise<ResponseHandler> {
  const collectionPath = bh.getEntityData(entityKey).collection;
  const collection : FirebaseFirestore.CollectionReference = fr.collection(collectionPath);
  const model: any = bh.getEntityData(entityKey).type;

  try{
    const snapshot = await collection.get().then((list) => list.docs.map((doc) => new model(doc.data())));
    return new ResponseHandler({
      statusCode: 200,
      code: OK,
      message: SUCCESS,
      timestamp: new Date().toISOString(),
      data: snapshot,
    });
  }
  catch (e: any){
    return new ResponseHandler({
      statusCode: 500,
      code: ld.isString(e.code) ? e.code : ''+e.code,
      message: e.message,
      timestamp: new Date().toISOString(),
      data: null,
    }); 
  }
}

export async function findListByUidList(data: {
  entityKey: SavedEntities;
  uidList: string[];
}): Promise<ResponseHandler> {
  const collectionPath = bh.getEntityData(data.entityKey).collection;
  const collection : FirebaseFirestore.CollectionReference = fr.collection(collectionPath);
  const model: any = bh.getEntityData(data.entityKey).type;
  const uidField = bh.getUidField(data.entityKey);

  try{
    const snapshot = await collection.where(uidField, IN, data.uidList).get().then((list) => list.docs.map((doc) => new model(doc.data())));
    return new ResponseHandler({
      statusCode: 200,
      code: OK,
      message: SUCCESS,
      timestamp: new Date().toISOString(),
      data: snapshot,
    });
  }
  catch (e: any){
    return new ResponseHandler({
      statusCode: 500,
      code: ld.isString(e.code) ? e.code : ''+e.code,
      message: e.message,
      timestamp: new Date().toISOString(),
      data: null,
    }); 
  }
}

export async function updateLogo(data: {
  entityKey: SavedEntities;
  storageRefKey: SavedLogoPaths;
  logoFile?: File;
  logoBytes?: Uint8Array;
  uid: string;
}): Promise<ResponseHandler> {
  const collectionPath = bh.getEntityData(data.entityKey).collection;
  const collection : FirebaseFirestore.CollectionReference = fr.collection(collectionPath);
  const logoPath: string = data.storageRefKey;
  let dataToSave: Record<string, any> = {};

  //const logoFile: File = data.logoFile;
  const logoBytes: Uint8Array = data.logoBytes!;

    if (logoBytes != null) {
      const ref: string = `${LOGOS}/${logoPath}/${data.uid}`;
      const logoUrl: string = await storeToStorage({ref: ref, fileBytes: logoBytes});
      
      if (logoUrl != "") {
         dataToSave = {'logoUrl': logoUrl};
      } 
    } 

    try {
      const snapshot = collection.doc(data.uid).update(dataToSave);
      return new ResponseHandler({
        statusCode: 201,
        code: OK,
        message: SUCCESS,
        timestamp: new Date().toISOString(),
        data: true,
      });
    } 
    catch (e: any){
      return new ResponseHandler({
        statusCode: 500,
        code: ld.isString(e.code) ? e.code : ''+e.code, 
        message: e.message,
        timestamp: new Date().toISOString(),
        data: false,
      });
    }
}



export async function storeToStorage(data: {
  ref: string,
  file?: File,
  fileBytes?: Uint8Array
}): Promise<string> {
  try {
    const storage = await getStorage();
    const file =  storage.bucket().file(data.ref);
    file.save(Buffer.from(data.fileBytes!));

    const downloadUrl: string = await  getDownloadURL(file);
    return downloadUrl;
  } 
  catch (e) {
    return "";
  }
};



export async function backup(data: {
  entity: SavedEntities;
  backupField: string;
  file?: File;
  fileBytes?: Uint8Array;
  uid: string;
}): Promise<ResponseHandler> {
    const collection : FirebaseFirestore.CollectionReference = fr.collection(SHOPS);
      let backupUrlField = data.backupField;
      let dataToSave: Record<string, any> = {};

      //const file: File = data.file;
      const fileBytes: Uint8Array = data.fileBytes!;

        if (fileBytes != null) {
          const ref: string = `${BACKUPS}/${SHOPS}/${data.uid}/${data.entity}`;
          const backupUrl: string = await storeToStorage({ref: ref, fileBytes: fileBytes});
          
          if (backupUrl != "") {
             dataToSave[backupUrlField] = backupUrl;
          } 
        } 

        try {
          const snapshot = collection.doc(data.uid).update(dataToSave);
          return new ResponseHandler({
            statusCode: 201,
            code: OK,
            message: SUCCESS,
            timestamp: new Date().toISOString(),
            data: true,
          });
        } 
        catch (e: any){
          return new ResponseHandler({
            statusCode: 500,
            code: ld.isString(e.code) ? e.code : ''+e.code, 
            message: e.message,
            timestamp: new Date().toISOString(),
            data: false,
          });
        }
}
