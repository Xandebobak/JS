function createLogger() {
  const logs = [];

  function warn(message) {
    logs.push({ message: message, dateTime: new Date(), type: "warn" });
  }

  function error(message) {
    logs.push({ message: message, dateTime: new Date(), type: "error" });
  }

  function log(message) {
    logs.push({ message: message, dateTime: new Date(), type: "log" });
  }

  function getRecords(type) {
    if (type) {
      return logs
        .filter((log) => log.type === type)
        .sort((a, b) => b.dateTime - a.dateTime);
    } else {
      return logs.sort((a, b) => b.dateTime - a.dateTime);
    }
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
}
