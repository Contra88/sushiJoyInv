import app from "./app.js";

//!RUN APP
app.listen(process.env.PORT || 3000, () => {
  console.log("Server on Port 3000");
});
