import React from 'react'
import RoomFilter from'./RoomFilter'
import RoomsList from'./RoomsList'
import  {RoomConsumer} from '../context'
import Loading from './Loading'
export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {
                (value) => {
                    const {loading,sortedRooms,rooms} = value
                if(loading) {
                return <Loading/>
          }
                    return (<div>
                    
                    <RoomFilter rooms ={rooms}/>
                    <RoomsList rooms={sortedRooms}/>
                </div>
                );
            }
            }
        </RoomConsumer>
        
    );
}
