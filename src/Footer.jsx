import { SiSwiggy } from "react-icons/si";

const List_1 = ['About', 'Careers', 'Swiggy One', 'Swiggy Instamart', 'Swiggy Genie']
const List_2 = ['Help & Support', 'Partner with Us', 'Ride with Us']
const List_3 = ['Terms and Condition', 'Cookie Policy', 'Privacy Policy', 'Investor Relations' ]
const List_4 = ['Bangalore','Gurgaon', 'Hyderabad', 'Delhi', 'Pune']
const Footer = ()=>{
    return(<>
    <div className=" bg-slate-200 p-6">
      <div className="max-w-[1000px]  m-auto flex flex-col sm:flex-row justify-around">
        <div className="text-4xl w-1/2 font-semibold tracking-tighter">For better experience,download the Swiggy app now</div>
        <div className="flex justify-around sm:w-3/5 md:-w-2/5 w-full mt-2 sm:mt-0 items-center gap-4">
        <a
          href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
          rel="nofollow noopener"
          target="_blank"
          className="sc-fyVfxW bPQKjP"
        >
          <img
            className="sc-koXPp fKIURO sc-eHsDsR eiYKkW"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            alt="Download Android App"
          />
        </a>
        
        <a
          href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
          rel="nofollow noopener"
          target="_blank"
          className="sc-fyVfxW bPQKjP"
        >
          <img
            className="sc-koXPp fKIURO sc-eHsDsR eiYKkW"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            alt="Download iOS App"
          />
        </a>
        </div>
      </div>
      
    </div>
    <div className="bg-black p-8 text-white">
      <div className="max-w-[1000px]  m-auto flex flex-wrap sm:flex-nowrap gap-2  justify-around">
        <div className="cursor-pointer">
        <div className="font-bold text-2xl flex items-center tracking-tighter"><SiSwiggy
            className="inline"
        />Swiggy</div>
        <p className="text-slate-300">&#169; 2024 Clone Technologies Pvt Ltd</p>
        </div>
        <div className="mb-12">
        <p className="font-bold">Company</p>
        <ul className="text-slate-300">
            {List_1.map((val,index)=>{
                return(<>
                    <li className='my-2 cursor-pointer' key={index}>{val}</li>
                </>)
            })}
        </ul>
        </div>
        <div className="flex flex-col">
        <div className="mb-12">
        <p className="font-bold">Contact Us</p>
        <ul className="text-slate-300">
            {List_2.map((val,index)=>{
                return(<>
                    <li className='my-2 cursor-pointer' key={index}>{val}</li>
                </>)
            })}
        </ul>
        </div>
        <div className="mb-12">
            <p className="font-bold">Legal</p>
            <ul className="text-slate-300">
            {List_3.map((val,index)=>{
                return(<>
                    <li className='my-2 cursor-pointer' key={index}>{val}</li>
                </>)
            })}
        </ul>
        </div>
        </div>
        <div className="mb-12">
        <p className="font-bold">We Deliver To</p>
        <ul className="text-slate-300">
            {List_4.map((val,index)=>{
                return(<>
                    <li className='my-2 cursor-pointer' key={index}>{val}</li>
                </>)
            })}
        </ul>
        </div>
      </div>
    </div>            
    </>)
};
export default Footer; 
