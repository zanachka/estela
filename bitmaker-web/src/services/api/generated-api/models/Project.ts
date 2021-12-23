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
    Permission,
    PermissionFromJSON,
    PermissionFromJSONTyped,
    PermissionToJSON,
} from './';

/**
 * 
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    readonly pid?: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    readonly token?: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    readonly containerImage?: string;
    /**
     * 
     * @type {Array<Permission>}
     * @memberof Project
     */
    users?: Array<Permission>;
}

export function ProjectFromJSON(json: any): Project {
    return ProjectFromJSONTyped(json, false);
}

export function ProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): Project {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pid': !exists(json, 'pid') ? undefined : json['pid'],
        'name': json['name'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'containerImage': !exists(json, 'container_image') ? undefined : json['container_image'],
        'users': !exists(json, 'users') ? undefined : ((json['users'] as Array<any>).map(PermissionFromJSON)),
    };
}

export function ProjectToJSON(value?: Project | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'users': value.users === undefined ? undefined : ((value.users as Array<any>).map(PermissionToJSON)),
    };
}


