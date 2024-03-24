import { GlobalRegistrator } from "@happy-dom/global-registrator";
import 'zone.js';
import 'zone.js/plugins/sync-test';
import 'zone.js/plugins/proxy';
import 'zone.js/testing';

GlobalRegistrator.register();

import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { getTestBed } from '@angular/core/testing';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
