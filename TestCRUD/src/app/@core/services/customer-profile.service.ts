import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// models
import { HttpConfigModel } from '@core/models/http-config.model';


// datas

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CustomerProfileModel, CustomerResponse } from '@core/models/customer.model';


@Injectable()
export class CustomerProfileService {

  private _endpoint = '/Customer';

  _httpOptions = new HttpHeaders()

  constructor(private http: HttpClient) {
  }

  getList(pageNo = 0, pageSize = 5, searchData?: CustomerProfileModel): Observable<CustomerResponse> {
    const _config: HttpConfigModel = new HttpConfigModel();

    const _serviceName = "/view-all";

    let params = new HttpParams();

    params = params.set('pageNo', pageNo.toString());
    params = params.set('pageSize', pageSize.toString());

    if (searchData) {
      if (searchData.first_name) {
        params = params.set('first_name', searchData.first_name);
      }

    }

    return this.http.get<any>(this._endpoint + '/list', {
      headers: this._httpOptions,
      params: params,
    });
  }

}
