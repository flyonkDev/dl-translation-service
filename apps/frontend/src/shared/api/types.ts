import type { AxiosRequestConfig, AxiosError } from 'axios';

/**
 * Common API error wrapper for the app.
 * It hides Axios specifics from the rest of the codebase.
 */
export interface ApiError<TError = unknown> extends Error {
	status?: number;
	data?: TError;
	isNetworkError: boolean;
	originalError: unknown;
}

/**
 * Convert any unknown error (including AxiosError) to ApiError.
 */
export function toApiError<TError = unknown>(error: unknown): ApiError<TError> {
	const apiError: ApiError<TError> = {
		name: 'ApiError',
		message: 'Unexpected API error',
		status: undefined,
		data: undefined,
		isNetworkError: false,
		originalError: error,
	};

	if (isAxiosError<TError>(error)) {
		apiError.message = error.message;
		apiError.status = error.response?.status;
		apiError.data = error.response?.data;
		apiError.isNetworkError = !error.response;
	}

	return apiError;
}

/**
 * Type guard to check if error is AxiosError.
 */
export function isAxiosError<T = unknown>(error: unknown): error is AxiosError<T> {
	return typeof error === 'object' && error !== null && 'isAxiosError' in error;
}

/**
 * Shortcut type for typical request config.
 */
export type ApiRequestConfig = AxiosRequestConfig;
