process.on("uncaughtException", (error) => {
  console.log("常规错误统一处理===>", error);
  process.exit(0);
});

process.on("unhandledRejection", (error) => {
  console.log("promise错误统一处理===>", error);
  process.exit(0);
});