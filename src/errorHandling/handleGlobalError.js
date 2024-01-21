const setupGlobalErrorHandling = (app) => {
      // This will ensure the app will never crash
      // it is global error handling
      app.all("*", (req, res, next) => {
        const error = new Error(`The requested URL is invalid: ${req.url}`);
        error.status = 404;
        next(error);
      });
    
      app.use((err, req, res, next) => {
        res.status(err.status || 500).json({ message: err.message });
      });
    }
    
    module.exports = setupGlobalErrorHandling;
    