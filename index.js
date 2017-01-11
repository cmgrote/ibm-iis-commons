/***
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

const RestConnection = require('./classes/rest-connection');
const EnvironmentContext = require('./classes/environment-context');

/**
 * Re-usable functions for inferring properties of and interacting with an IBM InfoSphere Information Server environment
 * @module ibm-iis-commons
 * @license Apache-2.0
 */
if (typeof require === 'function') {
  exports.RestConnection = RestConnection;
  exports.EnvironmentContext = EnvironmentContext;
}
