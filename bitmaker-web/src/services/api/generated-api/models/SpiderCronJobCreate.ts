/* tslint:disable */
/* eslint-disable */
/**
 * Bitmaker API v1.0 Documentation
 * Bitmaker API Swagger Specification
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    SpiderJobArg,
    SpiderJobArgFromJSON,
    SpiderJobArgFromJSONTyped,
    SpiderJobArgToJSON,
    SpiderJobEnvVar,
    SpiderJobEnvVarFromJSON,
    SpiderJobEnvVarFromJSONTyped,
    SpiderJobEnvVarToJSON,
    SpiderJobTag,
    SpiderJobTagFromJSON,
    SpiderJobTagFromJSONTyped,
    SpiderJobTagToJSON,
} from './';

/**
 * 
 * @export
 * @interface SpiderCronJobCreate
 */
export interface SpiderCronJobCreate {
    /**
     * 
     * @type {number}
     * @memberof SpiderCronJobCreate
     */
    readonly cjid?: number;
    /**
     * 
     * @type {string}
     * @memberof SpiderCronJobCreate
     */
    readonly name?: string;
    /**
     * 
     * @type {Array<SpiderJobArg>}
     * @memberof SpiderCronJobCreate
     */
    cargs?: Array<SpiderJobArg>;
    /**
     * 
     * @type {Array<SpiderJobEnvVar>}
     * @memberof SpiderCronJobCreate
     */
    cenvVars?: Array<SpiderJobEnvVar>;
    /**
     * 
     * @type {Array<SpiderJobTag>}
     * @memberof SpiderCronJobCreate
     */
    ctags?: Array<SpiderJobTag>;
    /**
     * 
     * @type {string}
     * @memberof SpiderCronJobCreate
     */
    schedule?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SpiderCronJobCreate
     */
    uniqueCollection?: boolean;
}

export function SpiderCronJobCreateFromJSON(json: any): SpiderCronJobCreate {
    return SpiderCronJobCreateFromJSONTyped(json, false);
}

export function SpiderCronJobCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpiderCronJobCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cjid': !exists(json, 'cjid') ? undefined : json['cjid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'cargs': !exists(json, 'cargs') ? undefined : ((json['cargs'] as Array<any>).map(SpiderJobArgFromJSON)),
        'cenvVars': !exists(json, 'cenv_vars') ? undefined : ((json['cenv_vars'] as Array<any>).map(SpiderJobEnvVarFromJSON)),
        'ctags': !exists(json, 'ctags') ? undefined : ((json['ctags'] as Array<any>).map(SpiderJobTagFromJSON)),
        'schedule': !exists(json, 'schedule') ? undefined : json['schedule'],
        'uniqueCollection': !exists(json, 'unique_collection') ? undefined : json['unique_collection'],
    };
}

export function SpiderCronJobCreateToJSON(value?: SpiderCronJobCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cargs': value.cargs === undefined ? undefined : ((value.cargs as Array<any>).map(SpiderJobArgToJSON)),
        'cenv_vars': value.cenvVars === undefined ? undefined : ((value.cenvVars as Array<any>).map(SpiderJobEnvVarToJSON)),
        'ctags': value.ctags === undefined ? undefined : ((value.ctags as Array<any>).map(SpiderJobTagToJSON)),
        'schedule': value.schedule,
        'unique_collection': value.uniqueCollection,
    };
}


