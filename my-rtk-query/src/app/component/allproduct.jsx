import { useGetAllProductsQuery} from "../service/dummydata";

const AllProducts =()=>{
  
  const {data, isError, isLoading} = useGetAllProductsQuery();
  if(isError){
    return <h1>there is an error</h1>
  }
  if(isLoading){
    return <h1>Loading ... </h1>

  }
  return (
    <div>
      {
        data?.products.map((p)=>{
          return <h1>{p.title}</h1>
        })
      }
    </div>
  )
}
export default AllProducts