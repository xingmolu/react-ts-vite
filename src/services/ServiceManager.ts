import type { ClassOf } from "../types";
// import type { AbstractService } from "./AbstractService";

export type ServiceIdentity = string | symbol;

export const ServiceManager = Symbol.for('@/service/ServiceManager');

export interface Service {
  readonly displayName: string;
  
  readonly description: string;
  
  readonly hasStarted: boolean;
  
  /**
   * 启动服务,仅供内部调用
   */
  start(): Promise<void>;
}

export interface ServiceManager {
  getServiceIdentities(): ServiceIdentity[];
  
  registerService(serviceIdentity: ServiceIdentity, serviceClass: ClassOf<Service>): void;
  
  resolveService<T extends Service>(serviceIdentity: ServiceIdentity): T;
  
  startService<T extends Service>(serviceIdentity: ServiceIdentity): Promise<T>;
  
  stopService<T extends Service>(serviceIdentity: ServiceIdentity): Promise<T>;
  
  startAllServices(): Promise<void>;
}