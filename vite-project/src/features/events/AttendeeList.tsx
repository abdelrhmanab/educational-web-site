
import Avatat1 from "../../assets/AttendeeList1.png"
import Avatat2 from "../../assets/AttendeeList2.png"
import Avatat3 from "../../assets/AttendeeList3.png"
import Avatat4 from "../../assets/AttendeeList4.png"


const attendeeList = [
  { avatar: Avatat1, name: "Hanson Deck", jobTitle: "Professor" },
  { avatar: Avatat2, name: "Sarah Johnson", jobTitle: "Designer" },
  { avatar: Avatat3, name: "Michael Smith", jobTitle: "Developer" },
  { avatar: Avatat4, name: "Emily Brown", jobTitle: "Manager" },
];

const AttendeeList = () => {
  return (
    <div className='flex flex-col gap-8'>
        <h4 className='text-3xl font-bold'>Attendee List</h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {attendeeList.map(i =>{
                return(
                    <div className="flex flex-col items-center">
                        <img src={i.avatar} alt={i.name} />
                        <h5 className='text-2xl font-bold'>{i.name}</h5>
                        <p className="text-2xl">{i.jobTitle}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default AttendeeList