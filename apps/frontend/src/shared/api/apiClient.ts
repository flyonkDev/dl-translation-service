import type { AxiosResponse } from 'axios';
import { httpClient } from './httpClient';
import { toApiError, type ApiError, type ApiRequestConfig } from './types';

/**
 * Performs a typed GET request.
 * TResponse - expected response body type
 * TError    - error body type returned from backend (if any)
 */
export async function apiGet<TResponse, TError = unknown>(
	url: string,
	config?: ApiRequestConfig
): Promise<TResponse> {
	try {
		const response: AxiosResponse<TResponse> = await httpClient.get(url, config);
		return response.data;
	} catch (error) {
		throw toApiError<TError>(error);
	}
}

/**
 * Typed POST request.
 * TResponse - expected response body type
 * TBody     - request body type
 * TError    - error body type from backend
 */
export async function apiPost<TResponse, TBody = unknown, TError = unknown>(
	url: string,
	body?: TBody,
	config?: ApiRequestConfig
): Promise<TResponse> {
	try {
		const response: AxiosResponse<TResponse> = await httpClient.post(url, body, config);
		return response.data;
	} catch (error) {
		throw toApiError<TError>(error);
	}
}

export async function apiPut<TResponse, TBody = unknown, TError = unknown>(
	url: string,
	body?: TBody,
	config?: ApiRequestConfig
): Promise<TResponse> {
	try {
		const response: AxiosResponse<TResponse> = await httpClient.put(url, body, config);
		return response.data;
	} catch (error) {
		throw toApiError<TError>(error);
	}
}

export async function apiPatch<TResponse, TBody = unknown, TError = unknown>(
	url: string,
	body?: TBody,
	config?: ApiRequestConfig
): Promise<TResponse> {
	try {
		const response: AxiosResponse<TResponse> = await httpClient.patch(url, body, config);
		return response.data;
	} catch (error) {
		throw toApiError<TError>(error);
	}
}

export async function apiDelete<TResponse, TError = unknown>(
	url: string,
	config?: ApiRequestConfig
): Promise<TResponse> {
	try {
		const response: AxiosResponse<TResponse> = await httpClient.delete(url, config);
		return response.data;
	} catch (error) {
		throw toApiError<TError>(error);
	}
}

/**
 * Convenience type for catching API errors in features.
 */
export type { ApiError } from './types';
