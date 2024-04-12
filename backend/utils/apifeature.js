class ApiFeature {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    search(){
       const keyword=this.queryStr.keyword ?{
        name:{
            $regex:this.queryStr.keyword,
            $options:'i',
        }
       }:{} 

       console.log(keyword)

      this.query= this.query.find({...keyword})

       return this
    }

    filter(){
        const querycopy={...this.queryStr};

        const removeField=['keyword','page','limit'];
        removeField.forEach((key)=>delete querycopy[key])

            
    // filter for price and Rating 

    let queryStr=JSON.stringify(querycopy);
    queryStr=queryStr.replace(/\b(gt|gte|lt|lte)\b/g,key=>`$${key}`);


        console.log(queryStr)
        this.query=this.query.find(JSON.parse(queryStr));
        return this
    }
    pagination(resultPage){
        const currentpage= Number(this.queryStr.page) ||1;
        
        const skip=resultPage*(currentpage-1);

        this.query=this.query.limit(resultPage).skip(skip)

        return this

    }

    // Add methods for different API features here
}

module.exports = ApiFeature;