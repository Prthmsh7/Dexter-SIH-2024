import { useState ,useRef , useEffect } from "react";

export default function Chat(){

    const chatinp = useRef();
    const [chats, setchats] = useState([]);
    const [msg, setmsg] = useState('');
    const [typing ,settyping] = useState('');

    const sendchats = () =>{
        if(inp && nm && iscollab && chatinp.current.value !== ''){
            socket.emit('send:chat', {room: inp, chat: chatinp.current.value, name: nm});
            setchats((prevChats) => prevChats.concat({ chat: chatinp.current.value, name: nm }));
            socket.emit('typing', {room: inp , dt: ''});
            setmsg('');

        }
        else{
            console.log('eroor')
        }
    }

    useEffect(() => {
        const handleReceiveChat = (data) => {
          setchats((prevChats) => prevChats.concat({ chat: data.chat, name: data.name }));
          console.log('chats', data);
        };
    
        socket.on('recieve:chat', handleReceiveChat);
    
        // Clean up the event listener when the component unmounts
        return () => {
          socket.off('recieve:chat', handleReceiveChat);
        };
      }, [socket]);

    return (
        <div className='h-[480px] w-[390px] bg-[#424242] fixed right-[50px] top-[90px] z-40 rounded-[8px] flex items-center justify-end flex-col select-none'>

            <div className='border-b border-b-[#5e5e5e] h-[60px] w-[390px] flex items-center justify-start text-[white]'>
                <div className='h-[35px] w-[150px] flex items-center justify-start'>
                <h2 className='ml-3'>{typing}</h2>

                </div>
                <button onClick={()=> openchatbox(false)} className=' cursor-pointer h-[35px] w-[90px] bg-[#3a55f1] text-[white] rounded-[8px] relative left-[130px]'>Close</button>
            </div>

             <div className='h-[370px] w-[390px] mb-2 flex items-center justify-start  flex-col-reverse overflow-hidden overflow-y-auto no-scrollbar'>
                   {[...chats].reverse().map((items, index)=>(
                     <div key={index} className={items.name === nm?' overflow-wrap  max-w-[60%]  bg-[#3bf5f5e7] rounded-[15px] break-words text-[15px] text-[black] p-2  self-end  mt-4 mr-4':' overflow-wrap  max-w-[60%] bg-[#aa57f7e7] rounded-[15px] break-words text-[15px] text-[black] p-2 self-start ml-4 mt-4'}>
                        <span className='text-[#2023ee]'>{items.name === nm? 'me':items.name}</span>
                        <br></br>
                        {items.chat}
                    </div>
                   ))}



                    {/* <div className='min-h-[32px] max-h-[370px] min-w-[35px] max-w-[190px] bg-[#aa57f7e7] rounded-[15px] break-words text-[15px] text-[black] p-2 relative right-[80px] mt-4'>
                       Hii vidit I'm good . wbu?
                    </div> */}
                    
            </div>

          <div className='w-[390px] h-[50px] flex justify-center items-center border-t border-t-[#5e5e5e]'>
            <input ref={chatinp} onChange={(e)=> {setmsg(e.target.value); if(e.target.value === ''){socket.emit('typing', {room: inp , dt: ''})} else{socket.emit('typing', {room: inp , dt: 'Typing...'})}}} value={msg} type="text" className='h-[37px] w-[280px] bg-[#20202098] text-[white] rounded-l-[8px]' />
            <button onClick={sendchats} className='h-[37px] w-[100px] bg-[#A2E22C] rounded-r-[8px] cursor-pointer'>send</button>
          </div>
        
          
        </div>
    )
}