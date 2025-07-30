// event emitters emits the events an event loops checks for them and run the events handlers attatched to it
const EventEmitter=require('events')

//creating a new event emitter object
const chatRoomEventEmitter=new EventEmitter()

//with this object we can emit the events
//  listen to events , event listeners executed only once , list of all events , list of all event listeners
//  add listeners ,  remove event listeners , prepend event listeners 

//when some person joins a new chat room 

//listener is added before emitting the chat
chatRoomEventEmitter.on('Joined',(data)=>{
    console.log("new person joined ",data);
})

chatRoomEventEmitter.once('Joined',()=>{
    console.log("Welcome members to the group this will run only once");
})

chatRoomEventEmitter.prependListener('Joined',()=>{
    console.log("Prepended to the top with the help of prepend listener");
})

chatRoomEventEmitter.prependOnceListener('Joined',()=>{
    console.log("Prepended to the top only for once");
})


//order of adding the event listeneris important
chatRoomEventEmitter.on('Joined',(data)=>{
    console.log("Another event listener for  ",data);
})

// we want to listen about the close event of the database when the connection has already been made


function newPersonJonined(name){
    chatRoomEventEmitter.emit('Joined',name);

}

chatRoomEventEmitter.setMaxListeners(10)
console.log(chatRoomEventEmitter.getMaxListeners());
console.log(chatRoomEventEmitter.eventNames());

function main(){
    const names=['IronMan','SpiderMan','Thor','CaptainAmerica','BlackWidow','Hulk']
    setInterval(()=>{
        const randomIndex=Math.floor(Math.random()*names.length+1)
        newPersonJonined(names[randomIndex])
    },2000)
}

main()

/*
    
    Chat room 
    
    On new Message
    on person Joined
    on ReplyMessage
    on Person Left group chat 
    setMaxListeners
    getMaxListeners


*/