import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Auth } from "../model/auth.Model";

@Injectable()
export class MainService {
  constructor(private httpClient: HttpClient) {}

  getAuth(): Observable<Auth> {
    return this.httpClient
      .get<Auth>("Home/VerifySession")
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      // console.log("Client side error: " + errorResponse.error.message);
    } else {
      // console.log("Server Side error: " + errorResponse);
    }

    return throwError(
      "Ther is problem with service. We are notified & working on it. Please try again after some time"
    );
  }
}
