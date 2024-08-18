const Links = ['Bangalore','Gurgaon', 'Hyderabad', 'Delhi', 'Pune','Kolkata','Chennai','Mumbai','Ahemadabad','Jaipur','Chandigarh','Nagpur']
const BestPlaces = ()=>{
    return(<div className="max-w-[1200px] mx-auto mb-16">

        <h2 className="text-3xl tracking-tighter px-2 font-bold">Best Places to Eat Across Cities</h2>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2  gap-4 my-6">
            {Links.map((val,index)=>{return(<>
                <button key={index}
                className="py-3 border mx-2 font-semibold rounded-lg border-zinc-400">Best Restaurants in {val}</button>
            </>)})}
        </div>
    </div>)
}
export default BestPlaces