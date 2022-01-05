import { HttpHeaders } from '@angular/common/http';
import { HEADER_CONTENT_TYPE } from '../datas/header-content-type';
import { HTTP_METHOD } from '../datas/http-method';

export class HttpConfigModel {
    baseUrl: string = "";
    headers: HttpHeaders = new HttpHeaders({
        'Content-Type': HEADER_CONTENT_TYPE.JSON,
    });
    body: any;
    method: HTTP_METHOD = HTTP_METHOD.GET;
    isMultipart: boolean = false;
    skipLoading: boolean = false;
    skipNotif: boolean = true;
    isDownloadFile: boolean = false;
    fileDownloadName: string = "";
}
