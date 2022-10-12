export const API_ROOT = "https://fullstack.exercise.applifting.cz/"

const registerTenantResponseBody = {"tenantId":"fcaee9d7-0635-4107-b17f-83c4d16f27b9","apiKey":"5beb2a0d-e9d1-48fd-8229-3f101bc7fbab","name":"jandiee","createdAt":"2022-10-11T15:04:07.2984025Z","lastUsedAt":null}

export const TENNANT_ID = registerTenantResponseBody.tenantId
export const TENANT_NAME = process.env.TENANT_NAME
export const TENANT_PASSWORD = process.env.TENANT_PASSWORD
export const API_KEY = registerTenantResponseBody.apiKey
