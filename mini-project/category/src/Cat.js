import React from 'react'
import './App.css';
import { useEffect, useState } from 'react';
import axios from  'axios';

export default function Cat() {
   let oldData=JSON.parse(localStorage.getItem("cartData")) ?? [];
   let [cartItem,setCatItem]=useState(oldData)
   
    let [cartTotal,setCartTotal]=useState(oldData.length)
    let [product, setproduct] = useState([]);
    let [category, setcategory] = useState([]);
    let [activeCat, setActiveCat] = useState("")
    let [pdata,psetData]=useState([])


    let apiUrl;
    //all product here
    let getProduct = (catName = "") => {
        if (catName === "") {
            apiUrl = `https://dummyjson.com/products`;

        }
        else {
            apiUrl = `https://dummyjson.com/products/category/${catName}`
            setActiveCat(catName)
        }
        axios.get(apiUrl)
            .then((res) => {
                return res.data
            })
            .then((finalData) => {
                setproduct(finalData.products)
                // setproductModal(finalData.products)
            })
    }
    //all category here
    let getCategory = () => {
        let apiCatUrl = `https://dummyjson.com/products/categories`;

        axios.get(apiCatUrl)
            .then((res) => {
                setcategory(res.data)
            })

    }
    useEffect(() => {
        getProduct();
        getCategory()
    }, [])

    let productitems= product.map((item,i)=>{
        return(
         <>
         <Card productDetails={item} key={i} psetData={psetData} setCartTotal={setCartTotal} cartItem={cartItem} setCatItem={setCatItem} />
     
         </>
        )
       
     })
   
    
    return (
        <div className="App">

          <button style={{float:'right',paddingRight:'20px'}} >Cart Items  {cartTotal}</button>
            <ModalData pdata={pdata} />
            <div className=' container my-5'>
                <div className='row'>
                    <div className='col-3'>
                        <ul className="list-group categoriesList">
                            <h3 className='my-4 '>All Categories</h3>
                            {
                                category.map((v, i) => {
                                    return (
                                        <>
                                            <li className={`list-group-item ${(v === activeCat) ? 'active' : ''}`} key={i} onClick={() => getProduct(v)} style={{ cursor: 'pointer' }}>{v}</li>
                                        </>
                                    )
                                })
                            }


                        </ul>
                    </div>
                    <div className='col-9'>
                        <div className='row'>
                            <h3 className='my-4'>All Products</h3>
                            {productitems}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export function Card({productDetails,psetData,setCartTotal,cartItem,setCatItem}){





  
   let addtoCart=(id)=>{


    let checkStatus=cartItem.filter((v)=>v.id==id)

    if(checkStatus.length==0){



      let apiUrl1=`https://dummyjson.com/products/${id}`;
      axios.get(apiUrl1)
    .then((res)=>{
      return res
    
    })
    .then((finaldata)=>{
      let apiData=finaldata.data;
      apiData['qty']=1;
       let finalData1=[...cartItem,apiData]
       setCatItem(finalData1)
       setCartTotal(finalData1.length)
        localStorage.setItem("cartData",JSON.stringify(finalData1))
    })
  }
else{
  alert("data already there!")
  
if(checkStatus){

  let fDtata=cartItem.filter((v)=>{
    if(v.id==checkStatus[0].id){
      checkStatus[0]['qty'] = checkStatus[0]['qty'] + 1
      let finalData1=[...cartItem]
     
        localStorage.setItem("cartData",JSON.stringify(finalData1))
    }
 
   return checkStatus
  
})
console.log(fDtata)
}

    }
  }
  
    function productModalDetail(id){
       
                let apiUrl1=`https://dummyjson.com/products/${id}`;
              axios.get(apiUrl1)
            .then((res)=>{
              return res
            
            })
             .then((finaldata)=>{
                console.log(finaldata)
              psetData([finaldata.data])
             })
            }
    
    return(
      <>
    
      <div className='col-4'>
      <div className="card mb-5" >
        <div    className='w-100' style={{
          height:'250px',
           background:`url("${productDetails.thumbnail}")center`,
           backgroundSize:'cover'
           }}></div>
  <div className="card-body" style={{height:"130px" , overflow:"hidden",padding:"10px"}}>
   
  <h5 className="card-title" style={{cursor:"pointer"}}  data-bs-toggle="modal" data-bs-target="#exampleModal"   onClick={()=>productModalDetail(productDetails.id)}>{productDetails.title}</h5>
  <button onClick={()=>addtoCart(productDetails.id)}>Add To Cart</button>
  <p className="card-text">{productDetails.description}</p>
  
  </div>
  </div>
      </div>
      </>
    )

  }


function ModalData({pdata}){

    return(
        <>
       

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" >
              {
            pdata.length >=1 ?
<div>
            <div className="modal-header">
            <h1 className="modal-title fs-5 text-center" id="exampleModalLabel">{pdata[0].title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className='row'>
              <div className='col-md-4'>
                <div className='imagesproduct'>
                  <img src={pdata[0].images[0]} style={{width:'100%'}}/>
                   </div> 
              </div>
            <div className='col-md-8 text-start productcat'>
              <h4><span>Category Name :</span> {pdata[0].category}</h4>
      <p><span>Description:</span>  {pdata[0].description}</p>
      <h6><span>Price:</span> {pdata[0].price}</h6>
      <h6><span>Stock:</span>{pdata[0].stock}</h6>
      </div>
      </div>
          </div>
          </div>
            :
            ""
}
             
              </div>
            </div>
          </div>

           
      
        </>
         
    )
  
}  
  //modal

//   function ProductModalDetail(id){
//     console.log(id)
//     let [productModalData,setproductModal]=useState([])
//     let apiUrl1=`https://dummyjson.com/products/${id}`;
//   axios.get(apiUrl1)
// .then((res)=>{
//   return res

// })
//  .then((finaldata)=>{
//     console.log(productModalData)
//   setproductModal(finaldata.data)
//  })
    


// }
   
   