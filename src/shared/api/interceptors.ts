import axios, { type AxiosError, type AxiosRequestConfig } from 'axios'

export const apiInstance = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
})

export const createInstance = async <T>(
	config: AxiosRequestConfig,
	options?: AxiosRequestConfig
): Promise<T> => {
	return apiInstance({
		...config,
		...options
	}).then(r => r.data)
}

export type BodyType<Data> = Data

export type ErrorType<Error> = AxiosError<Error>
