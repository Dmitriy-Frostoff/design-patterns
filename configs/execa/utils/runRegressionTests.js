import { $, ExecaError } from 'execa';

/**
 * Run regression tests.
 *
 * @param {(pathToLogFile: string, error: Error | ExecaError) => Promise<void>} writeErrorLogFile - callback for
 *    async writing log file via NodeJS
 * @param {string} logFile - resolved via NodeJS path to the logfile
 * @returns {Promise<void>}
 */
export default async function runRegressionTests(writeErrorLogFile, logFile) {
  try {
    console.log('Run regression tests...\n');
    await $(
      `npm run tsx creational/abstract-factory/abstract-factory.ts && npm run tsx behavioral/observer/observer.ts && npm run tsx structural/decorator/decorator.ts`,
      {
        stdio: ['pipe', 'pipe', 'pipe'],
        verbose: 'full',
        cleanup: true,
      },
    );
  } catch (error) {
    console.error(`An error occured: ${error.message}`);

    // write logfile beside the script
    await writeErrorLogFile(logFile, error);
  }
}
