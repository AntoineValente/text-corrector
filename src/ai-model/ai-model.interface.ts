export const AiModelToken = Symbol('AiModelSymbol');
export interface IAiModel {
  generateContent: (prompt: string) => Promise<string>;
}
