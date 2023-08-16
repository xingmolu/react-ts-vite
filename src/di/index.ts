import 'reflect-metadata';
export {
  useContainer,
  useService,
  useAllServices,
  useNamedService,
  useAllNamedService,
  useTaggedService,
  useAllTaggedService,
  useResolve
} from './hooks';
export {
  injectContainer,
  injectService,
  injectAllServices,
  injectNamedService,
  injectAllNamedServices,
  injectTaggedService,
  injectAllTaggedServices,
  resolve
} from './class-component';
export {
  ContainerContext
} from './context';

export { Container, inject, injectable } from 'inversify';