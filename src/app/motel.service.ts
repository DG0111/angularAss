import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

const motelApiUrl = 'http://5e78dc5e491e9700162de637.mockapi.io/motels';

@Injectable()


export class MotelService {

  constructor(private http: HttpClient) { }

  getListMotel(): Observable<any> {
    return this.http.get<any>(motelApiUrl);
  }

  destroyMotel(id): Observable<any> {
    const destroyApiUrl = `${motelApiUrl}/${id}`;
    return this.http.delete<any>(destroyApiUrl);
  }
}
