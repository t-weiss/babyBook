import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BabyService {
  constructor(private http: HttpClient) {}
  getPhotos(): Observable<any> {
    return this.http.get(
      "CLOUDINARY_URL=cloudinary://525113569772349:HJt3S_txALgDBo1a-NcuIcZ_WDA@babybook"
    );
  }
}
