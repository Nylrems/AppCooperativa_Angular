/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async set(key: string, value: any): Promise<void> {
    const data = await this._storage?.set(key, value);
  }

  public async get(key: string): Promise<any> {
    return await this._storage?.get(key);
  }

  public async remove(key: string): Promise<void> {
    await this._storage?.remove(key);
  }

}
