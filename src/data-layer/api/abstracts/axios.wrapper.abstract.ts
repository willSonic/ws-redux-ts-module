
import 'rxjs/add/observable/fromPromise';
import  { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';


export abstract class AxiosWrapperAbstract {


	public abstract async delete(urlPath: string): Promise<AxiosResponse['data']>;

	public abstract async get(urlPath: string, params:any): Promise<AxiosResponse['data']> ;

	public abstract async patch(urlPath: string, data:any): Promise<AxiosResponse['data']> ;

	public abstract async post(urlPath: string, data:any): Promise<AxiosResponse['data']> ;

	public abstract async postFormData(urlPath: string, data:any): Promise<AxiosResponse['data']> ;

	public abstract async put(urlPath: string, data:any): Promise<AxiosResponse['data']> ;

	public abstract refreshApiInstance(newConfig: AxiosRequestConfig):void ;

	/* public get axios instance for testing purposes */
	public abstract getAxiosInstance(): AxiosInstance;


}