
import { format } from "sql-formatter";
import { Logger, QueryRunner } from "typeorm";


export class CustomLogger implements Logger {
  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    // Format the SQL with line breaks and indentation
    const formattedQuery = format(query, {
      language: "mysql", // or 'postgresql', 'sqlite', etc.
      tabWidth: 2,
      keywordCase: "upper",
    });

    console.log("\n--- [TYPEORM QUERY] ---");
    console.log(formattedQuery);
    if (parameters && parameters.length) {
      console.log("Parameters:", parameters);
    }
    console.log("-------------------------\n");
  }

  logQueryError(error: string | Error, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    console.error("\n [TYPEORM ERROR]:", error);
    console.error(format(query, { language: "mysql" }));
    if (parameters) console.error("Parameters:", parameters);
  }

  logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    console.warn(`\n [SLOW QUERY - ${time}ms]:`);
    console.warn(format(query, { language: "mysql" }));
  }

  logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    console.log("[SCHEMA BUILD]:", message);
  }

  logMigration(message: string, queryRunner?: QueryRunner) {
    console.log("[MIGRATION]:", message);
  }

  log(level: "log" | "info" | "warn", message: any, queryRunner?: QueryRunner) {
    console.log(`[${level.toUpperCase()}]:`, message);
  }
}
