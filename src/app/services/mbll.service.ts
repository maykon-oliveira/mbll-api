import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroDetail } from './model/hero-detail';
import { ListResponse } from './model/list-response';
import { MBLLResponse } from './model/mbll-response';

@Injectable({
  providedIn: 'root',
})
export class MBLLService {
  readonly languageConfig = {
    lang: 'en',
    language: 'en',
  };

  constructor(private readonly http: HttpClient) {}

  findAll() {
    return this.http.post<MBLLResponse<ListResponse>>(
      'https://api.mobilelegends.com/m/hero/list',
      this.languageConfig
    );
  }

  getDetailsById(id: string) {
    return this.http.get<MBLLResponse<HeroDetail>>(
      `./api/hero/detail/${id}?language=${this.languageConfig.lang}`
    );
  }
}
