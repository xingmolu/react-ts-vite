import { injectable } from '../di';


/**
 * 提供对 {@link Service} 接口的抽象实现。
 */
@injectable()
export abstract class AbstractService {
  private _started: boolean = false;

  private _starting?: Promise<void>;

  abstract get displayName(): string;

  abstract get description(): string;

  get hasStarted(): boolean {
    return this._started;
  }

  /**
   * 启动此服务。
   */
  start(): Promise<void> {
    if (this._starting) {
      return this._starting;
    }
    this._starting = this.onStart().then(() => {
      this._started = true;
    });
    return this._starting;
  }

  onStart(): Promise<void> {
    return Promise.resolve();
  }
}
