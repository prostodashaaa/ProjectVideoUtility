"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
class ConsoleLogger {
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        console.log(...args);
    }
    end() {
        console.log("Готово");
    }
    static getInstance() {
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        }
        return ConsoleLogger.logger;
    }
}
exports.ConsoleLogger = ConsoleLogger;
