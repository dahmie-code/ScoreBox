import Card from './Card';
import { events } from "../events";
import { Dropdown } from 'flowbite-react';

const Dashboard =()=>{
    return (
        <>

        <div className='bg-[#1C1C1C]/90 md:h-[83.8vh] pt-5'> 
        <div  className="text-white ml-11 text-medium">       
        <Dropdown
  label="All Events"
  inline={true}
>
  <Dropdown.Item>
    Recent Event
  </Dropdown.Item>
  <Dropdown.Item>
    Virtual Events
  </Dropdown.Item>
  <Dropdown.Item>
    Physical Events
  </Dropdown.Item>
</Dropdown></div>
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-4">
                 {
                events.map((event)=>
                <Card key={event.id} event ={event}/>
                )
            }
            </div>
           
        </div></>
    )
}

export default Dashboard;