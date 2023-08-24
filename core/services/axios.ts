import axios, { AxiosPromise, AxiosRequestConfig, Method } from "axios";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const InstanceAxios = axios.create();

export class Service {
    public async movies(
      method: Method,
      url: string,
      body?: any,
      isMultipart?: boolean
    ) {
  
      const config: AxiosRequestConfig = {
        url: url ,
        method: method,
        headers: {
          'Accept': isMultipart ? '*/*' : 'application/json',
          'Content-Type': isMultipart
            ? 'multipart/form-data'
            : 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        data: body,
      };
  
      return new Promise(async (reslove, reject) => {
        this.instanceAxios(config)
          .then(({ data }) => {
            reslove(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }

    public async auth(
      method: Method,
      url: string,
      body?: any,
    ) {
  
      const config: AxiosRequestConfig = {
        url: url ,
        method: method,
        data: body,
      };
  
      return new Promise(async (reslove, reject) => {
        this.instanceAxios(config)
          .then(({ data }) => {
            reslove(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  
    private instanceAxios(config: AxiosRequestConfig): AxiosPromise {
      return InstanceAxios(config);
    }
  }