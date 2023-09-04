import { Injectable } from '@angular/core';
import { SectionData } from '../model';

const keyName = 'section-data' as const;

@Injectable({
  providedIn: 'root'
})
export class SectionDataService {

  async getData(): Promise<SectionData | null >{
    return JSON.parse(localStorage.getItem(keyName) ?? 'null');
  }

  async setData(data: SectionData): Promise<void> {
    localStorage.setItem(keyName, JSON.stringify(data));
  }
}
