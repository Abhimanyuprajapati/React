const Product=({img,name,description,price,isMarried,age})=>{
    return (
        <div>
  {/* //it uses the value of props by defining the parameter as props objects */}
          <img src={img} alt="products" />
          <h4>{name}</h4>
          <p>{description}</p>
          <h4>{price}</h4>
       {isMarried && <p>Married: Yes </p>}
       {age>=18 ? <p> {age} : age is valid</p>: <p> {age} age is not valid</p>}
        </div>
      );   
}

const Props= ()=>{    //parent elements in the props
    return (              
        <div>
            <h1>Product</h1>
            <Product
            img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg"
            name="Cyxus"
            desc="Non-Slip Fitness Leisure Running Sneakers"
            price="$29"
            isMarried={true}
            age={20}
            />
            <Product
            img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
            name="Vitike"
            desc="Latest Men Sneakers -Black"
            price="$100"
            isMarried={false}
            age={25}
            />
            <Product
            img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"
            name="Aomei"
            desc="Men's Trend Casual Sports Shoe"
            price="$40"
            isMarried={true}
            age={10}
            />
        </div>
    )
};
export default Props