import BestCuisines from "./BestCuisines"
import BestPlaces from "./BestPlaces"
import Category from "./Category"
import Footer from "./Footer"
import OnlineDelivery from "./OnlineDelivery"
import TopRest from "./TopRest"


const Home = ()=>{return(<div className="">
    <Category/>
    <TopRest/>
    <OnlineDelivery/>
    <BestPlaces/>
    <BestCuisines/>
    <Footer/>
</div>)}
export default Home