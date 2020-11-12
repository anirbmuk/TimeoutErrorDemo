import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DummyData } from './dummydata.service';

export class AppData implements InMemoryDbService {

  createDb() {
    return {
      items: DummyData.items
    };
  }
}
