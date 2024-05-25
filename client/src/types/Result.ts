export type Result<T> =
  | {
      payload: T;
      success: true;
    }
  | {
      payload: null;
      success: false;
      message: string;
    };
