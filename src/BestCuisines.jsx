
const Links = ['Chinese', 'South Indian', 'Indian' ,'Kerala','Korean','North Indian','Seafood', 'Bengali', 'Punjabi', 'Italian','Andhra']
const BestCuisines = ()=>{
    return(<div className="max-w-[1200px] mb-16 mx-auto">

        <h2 className="text-3xl tracking-tighter px-2 font-bold">Best Cuisines Near Me</h2>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-4 my-6">
            {Links.map((val,index)=>{return(<>
                <button key={index}
                className="py-3 border mx-2 font-semibold rounded-lg border-zinc-400">Restaurants Near Me {val}</button>
            </>)})}
        </div>
    </div>)
}
export default BestCuisines