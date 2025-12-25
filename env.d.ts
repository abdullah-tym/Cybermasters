
interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Define or augment the ProcessEnv interface to include the required API_KEY
interface ProcessEnv {
  API_KEY: string;
  [key: string]: string | undefined;
}

// Define or augment the Process interface that TypeScript expects for the 'process' variable
interface Process {
  env: ProcessEnv;
}

// Declare the global 'process' variable using the 'Process' type to resolve redeclaration and type mismatch errors
declare var process: Process;
