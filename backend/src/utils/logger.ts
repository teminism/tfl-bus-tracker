const getTimestamp = () => {
  return new Date().toISOString();
};

export const logInfo = (message: string) => {
  console.log(`[INFO] [${getTimestamp()}]: ${message}`);
};

export const logWarn = (message: string) => {
  console.warn(`[WARN] [${getTimestamp()}]: ${message}`);
};

export const logError = (message: string, error?: unknown) => {
  console.error(`[ERROR] [${getTimestamp()}]: ${message}`);
  if (error instanceof Error) {
    console.error(error.stack);
  } else if (typeof error === 'object') {
    console.error(JSON.stringify(error, null, 2));
  } else if (error) {
    console.error(error);
  }
};
