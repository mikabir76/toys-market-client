import React, { useEffect, useState } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category from './Category';
const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState("test")
    const handleTabClick = (tabName) =>{
        setActiveTab(tabName)
        // console.log(tabName)
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/alltoy/${activeTab}`)
        .then(res => res.json())
        .then(data =>{
            setCategories(data)
        })
    },[activeTab])
    // const result = categories?.filter(category => category.category === activeTab);
    // console.log(result)
    return (
        <div className='bg-[#E8F7FF] '>
            <h1 className='text-4xl font-bold text-center py-8'>Sub Categories</h1>
            <div className='text-center mx-auto w-full'>
                <div className='flex justify-center text-xl space-x-8  items-center'>
                    <div onClick={()=> handleTabClick('cricket')}
                    className={` cursor-pointer border-2 py-2 px-4  bg-gray-100 ${activeTab == 'cricket' ? "bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-full text-xl text-white" : ""}`}
                    >
                        Cricket Toy
                    </div >
                    <div onClick={()=> handleTabClick('football')}
                    className={` cursor-pointer border-2 py-2 px-4  bg-gray-100 ${activeTab == 'football' ? "bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-full text-xl text-white" : ""}`}>
                        Football Toy
                    </div>
                    <div onClick={()=> handleTabClick('basketball')}
                    className={` cursor-pointer border-2 py-2 px-4  bg-gray-100 ${activeTab == 'basketball' ? "bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-full text-xl text-white" : ""}`}>
                        Basketball Toy
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-8'>
                {
                    categories.map(category => <Category
                    key={category._id}
                    category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;


{/* <Tabs>
<TabList className='w-full flex justify-center'>
  <Tab onClick={()=> handleTabClick('cricket')} className={` tab  tab2 cricket ${activeTab == 'cricket' ? "bg-yellow-900" : ""}`}>Cricket Toy</Tab>
  <Tab onClick={()=> handleTabClick('football')} className='ml-4 cursor-pointer'>Football Toy</Tab>
  <Tab onClick={()=> handleTabClick('basketball')} className='ml-4 cursor-pointer'>Basketball Toy</Tab>
</TabList>

<TabPanel>
  <h2>Any content 1</h2>
</TabPanel>
<TabPanel>
  <h2>Any content 2</h2>
</TabPanel>
<TabPanel>
  <h2>Any content 3</h2>
</TabPanel>
</Tabs> */}