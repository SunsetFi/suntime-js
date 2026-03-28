import inspector from "node:inspector";

const isDebuggerActive = inspector.url() !== undefined;
export default isDebuggerActive;
