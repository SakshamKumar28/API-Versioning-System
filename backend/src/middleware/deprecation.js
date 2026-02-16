const deprecationMiddleware = (req, res, next) => {
  // Set deprecation date to 6 months from now or a fixed date
  const deprecationDate = new Date();
  deprecationDate.setMonth(deprecationDate.getMonth() + 6);
  
  res.set("Warning", '299 - "This API version is deprecated and will be removed soon"');
  res.set("X-Deprecation-Date", deprecationDate.toISOString());
  
  next();
};

export default deprecationMiddleware;
