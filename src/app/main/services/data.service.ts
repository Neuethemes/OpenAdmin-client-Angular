import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private _httpClient: HttpClient) { }

  public getMonitoring() {
    return this._httpClient.get<ApiResponse>('/stats/monitoring');
  }

  public getSummary() {
    return this._httpClient.get<ApiResponse>('/stats/summary');
  }

  public getCharts() {
    return this._httpClient.get<ApiResponse>('/stats/charts');
  }

  public getSales() {
    return this._httpClient.get<ApiResponse>('/stats/sales');
  }

  public getMessages() {
    return this._httpClient.get<ApiResponse>('/messages');
  }

}
