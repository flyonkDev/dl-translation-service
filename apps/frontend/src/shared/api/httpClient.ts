import axios, { type AxiosInstance } from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/api';

/**
 * Single Axios instance used across the app.
 * Here we can configure baseURL, headers and interceptors.
 */
export const httpClient: AxiosInstance = axios.create({
	baseURL: API_BASE_URL,
	timeout: 15000,
	withCredentials: false,
});

// Request interceptor: attach common headers if needed
httpClient.interceptors.request.use((config) => {
	// Only set if not provided manually
	if (!config.headers['Content-Type'] && !(config.data instanceof FormData)) {
		config.headers['Content-Type'] = 'application/json';
	}

	return config;
});

// Response interceptor: just pass through for now
httpClient.interceptors.response.use(
	(response) => response,
	(error) => {
		// We do NOT transform here, we handle it in apiClient with toApiError()
		return Promise.reject(error);
	}
);
