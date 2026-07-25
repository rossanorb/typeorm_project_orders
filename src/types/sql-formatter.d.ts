declare module "sql-formatter" {
  export interface FormatOptions {
    language?: string;
    tabWidth?: number;
    indent?: string;
    uppercase?: boolean;
    keywordCase?: "upper" | "lower" | "preserve";
    linesBetweenQueries?: number;
    params?: Record<string, any> | any[];
  }

  export function format(query: string, options?: FormatOptions): string;

  const _default: { format: typeof format };
  export default _default;
}
