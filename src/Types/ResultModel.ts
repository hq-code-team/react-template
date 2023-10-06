export interface ResultModel<T> {
    /**返回代码 */
    Code: 100 | 102 | 999;
    /**是否提示 */
    IsPrompt: boolean;
    /**返回消息 */
    Message: string;
    /**携带数据 */
    Tag?: T;
    /**正确与否 */
    Result: boolean;
  }
  