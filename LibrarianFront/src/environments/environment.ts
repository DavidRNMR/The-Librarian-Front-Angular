// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlBooksRandom:  "http://localhost:8080/get",
  urlAddBook: "http://localhost:8080/createBook",
  urlAddReserve: "http://localhost:8080/reserve",
  urlPdf:"http://localhost:8080/reserve/reserve/export/pdf",
  urlBasic: "http://localhost:8080",
  urlChangePassword: "http://localhost:8080/users/changePassword",
  urlReservedByUser:"http://localhost:8080/reserve/reservedBooksByUserId",
  urlAllReservesByUser: "http://localhost:8080/reserve/getAllReservationById",
  urlAllBooksByIdBD: "http://localhost:8080/getByIdBook",

};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 * import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
 */
