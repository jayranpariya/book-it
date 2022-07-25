class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    // console.log(this.query);
    // console.log(this.queryStr);
    const location = this.queryStr.location
      ? {
          address: {
            $regex: this.queryStr.location,
            $options: "i",
          },
        }
      : {};
    // console.log(location);
    this.query = this.query.find({ ...location }).clone();
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    // console.log(queryCopy);
    //Remove fields from query
    const removeFields = ["location", "page"];
    // console.log(removeFields);
    removeFields.forEach((el) => {
      delete queryCopy[el];
    });
    // console.log(queryCopy);
    // console.log(queryCopy);

    this.query = this.query.find(queryCopy).clone();

    return this;
  }

  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resPerPage * (currentPage - 1);
    this.query = this.query.limit(resPerPage).skip(skip).clone();

    return this;
  }  
}

export default APIFeatures;
