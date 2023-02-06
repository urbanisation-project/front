/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AdSetPayload } from './adSetPayload';
import { Image } from './image';

export interface AdPayload { 
    id?: number;
    name?: string;
    resource?: Image;
    description?: string;
    visitorsCount?: number;
    adSet?: AdSetPayload;
}