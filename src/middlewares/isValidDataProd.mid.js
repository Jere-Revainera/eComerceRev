function isValidDataProd(req, res, next) {
  try {
    const { title, stock, price } = req.body;
    if (!title || !stock || !price) {
      const error = new Error("Title, stock and price are required");
      error.statusCode = 400;
      throw error;
    } else {
      return next();
    }
  } catch (error) {
    throw error;
  }
}
 
export default isValidDataProd