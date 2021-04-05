// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  Domain:'http://localhost:59909/',
  Group: 'http://localhost:59909/api/Groups/',
  SubGroup: 'http://localhost:59909/api/SubGroups/',
  Items: 'http://localhost:59909/api/Items/',
  GetGroupBySubGroupId:'http://localhost:59909/api/SubGroups/GetGroupBySubGroupId/',
  uploadFile:'http://localhost:59909/api/Items/api/dashboard/UploadDocuments',
  ItemDocuments:'http://localhost:59909/api/ItemDocuments/',
  employees: 'http://localhost:59909/api/Employees/',
  ItemStatusEmps: 'http://localhost:59909/api/ItemStatusEmps/',
  GetAllStatusesByItemId:'http://localhost:59909/api/ItemStatusEmps/GetAllStatusesByItemId/',
  GetItemDocumentsItemId:'http://localhost:59909/api/ItemDocuments/GetItemDocumentsItemId/',
  GetImage:'http://localhost:59909/Items/getImage/',
  User: 'http://localhost:59909/api',
  GetSubGroupsByGroupId:"http://localhost:59909/api/SubGroups/GetSubGroupsByGroupId/",
  Active:'http://localhost:59909/api/SubGroups/Active/',
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
