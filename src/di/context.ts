import {Container} from 'inversify';
import React from 'react';

export const ContainerContext = React.createContext<Container>(undefined as unknown as Container);

ContainerContext.displayName = 'InversifyContainerContext';