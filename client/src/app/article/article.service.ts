import { Injectable} from '@angular/core';

@Injectable()
export class ArticleService {
  toggleFilter: { isShow: Boolean } = { isShow: false };
  toggleManage: { isManaging: Boolean } = { isManaging: false };
  constructor() { }
}
