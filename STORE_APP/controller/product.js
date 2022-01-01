const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ price: { $gt: 30 } })
    .select("name price createdAt")
    .sort("-name price")
    .skip(5)
    .limit(20);
  res.status(200).json({ products, noOfProducts: products.length });
};

const getAllProducts = async (req, res) => {
  const {
    srchFeatured,
    srchCompany,
    srchName,
    sort,
    select,
    limit,
    page,
    numericFilter,
  } = req.query;
  const queryObject = {};

  // To filter based on query parameter
  if (srchFeatured)
    queryObject.featured = srchFeatured === "true" ? true : false;
  if (srchCompany) queryObject.company = srchCompany;

  /* To filter name of product which has regex match For example 
  localhost:3000/api/v1/products?select=name,price&sort=-price&srchName=w
  if we pass srchName as "w" then all prouct with name contains letter "w" will be returned options i indicate case insensitive */
  if (srchName) queryObject.name = { $regex: srchName, $options: "i" };

  /* The sort & select input would contain "," as separator from request as below so need to split and join with space
  Select ex, localhost:3000/api/v1/products?select=name,price&sort=-price&srchName=w */
  const selectedField = select && select.split(",").join(" ");

  // Sort ex, localhost:3000/api/v1/products?select=name,price&sort=name,-price&srchName=w
  const sortField = sort ? sort.split(",").join(" ") : "name";

  /* Pagination logic: in this total product list we have 23 products, now if we want to view 7 items per page
  then it will be 4 pages with 7 7 7 2 items in it total 23, this we can achieve by using concept of skip and limit
  limit indicates number of items wants to view, page indicates which page items to view
  Ex, localhost:3000/api/v1/products?select=name,price&limit=7&page=3 
  if user wants to view 3rd page with limit 7 then value of skip would be 14 
  means will be skipping first 14 items, viewing next 7 items
  */
  const skip = (page ? Number(page - 1) : 0) * (limit ? Number(limit) : 10);

  /* NumericFilter, this is used to filter numeric values like >, < etc., 
  localhost:3000/api/v1/products?select=name,price&limit=7&page=3&numericFilter=price>5,rating<4.5*/
  if (numericFilter) {
    //Ex: numericfilter value would be: price>5,rating<4.5
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(<|<=|=|>=|>)\b/g;
    let filters = numericFilter.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    /* post above massaging filters value would be : price-${gt}-5,rating-${lt}-4
    so each value contains field, operator, value converting them to query object*/
    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  const pro = await Product.find(queryObject)
    .select(selectedField)
    .sort(sortField)
    .skip(skip)
    .limit(Number(limit) || 10);

  res.status(200).json({ pro, noOfProducts: pro.length });

  /* Sample fetch with all teh above combination,
  localhost:3000/api/v1/products?
  srchFeatured=false&
  srchCompany=ikea&
  srchName=s&
  sort=-name&
  select=name,price&
  numericFilter=price<50&
  limit=1&
  page=3 */
};

module.exports = { getAllProductsStatic, getAllProducts };
