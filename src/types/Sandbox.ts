  export enum SandboxType {
    Proxy = 'proxy',
    Snapshot = 'snapshot',
  };
  
  
  export interface Sandbox {
    // 沙箱的名字
    name: string;
    
    // 沙箱的类型
    type: SandboxType;
    
    // 沙箱的代理对象
    proxy: WindowProxy;
    
    // 沙箱是否激活中
    active: boolean;
    
    latestSetProp?: PropertyKey | null;
    
    // 开启沙箱
    start: () => void;
    
    // 关闭沙箱
    stop: () => void;
  }