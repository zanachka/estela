/* tslint:disable */
/* eslint-disable */
/**
 * estela API v1.0 Documentation
 * estela API Swagger Specification
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
    FieldCoverageStats,
    FieldCoverageStatsFromJSON,
    FieldCoverageStatsFromJSONTyped,
    FieldCoverageStatsToJSON,
} from './';

/**
 * 
 * @export
 * @interface CoverageStats
 */
export interface CoverageStats {
    /**
     * 
     * @type {number}
     * @memberof CoverageStats
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof CoverageStats
     */
    totalItemsCoverage?: number;
    /**
     * 
     * @type {Array<FieldCoverageStats>}
     * @memberof CoverageStats
     */
    fields?: Array<FieldCoverageStats>;
}

export function CoverageStatsFromJSON(json: any): CoverageStats {
    return CoverageStatsFromJSONTyped(json, false);
}

export function CoverageStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoverageStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalItems': !exists(json, 'total_items') ? undefined : json['total_items'],
        'totalItemsCoverage': !exists(json, 'total_items_coverage') ? undefined : json['total_items_coverage'],
        'fields': !exists(json, 'fields') ? undefined : ((json['fields'] as Array<any>).map(FieldCoverageStatsFromJSON)),
    };
}

export function CoverageStatsToJSON(value?: CoverageStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total_items': value.totalItems,
        'total_items_coverage': value.totalItemsCoverage,
        'fields': value.fields === undefined ? undefined : ((value.fields as Array<any>).map(FieldCoverageStatsToJSON)),
    };
}

