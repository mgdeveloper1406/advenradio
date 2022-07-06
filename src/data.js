import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Radio Maranata Global",
            artist: "Radio Adventista",
            cover: "https://i1.sndcdn.com/avatars-000199018426-tta1fb-t240x240.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://alecorahoy.radioca.st/stream",
            active: true,
        },
        {
            name:"Radio Adventista",
            artist: "Radio Adventista",
            cover: "https://i1.sndcdn.com/avatars-000199018426-tta1fb-t240x240.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "http://176.9.117.123:9998/;stream/1",
            active: true,
         },
        {   
            name:"Radio Joven Adventista",
            artist: "Radio Adventista",
            cover: "https://i1.sndcdn.com/avatars-000199018426-tta1fb-t240x240.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "http://cloudstream2032.conectarhosting.com:9786/;typemp3",
            active: false,
        },
        {
            name:"Radio Adventista Los Angeles",
            artist: "Radio Adventista",
            cover: "https://i1.sndcdn.com/avatars-000199018426-tta1fb-t240x240.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://node-35.zeno.fm/n8fydg9gwuquv?rj-ttl=5&rj-tok=AAABeRpmOQoAw3NM-MET66rcDg",
            active: false,
        },
        {
            name:"Esperanza Colombia Radio",
            artist: "Radio Adventista",
            cover: "https://i1.sndcdn.com/avatars-000199018426-tta1fb-t240x240.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://radiolatina.live:10974/;",
            active: false,
        },
        {
            name:"Radio UnACh",
            artist: "Radio Adventista",
            cover: "https://i1.sndcdn.com/avatars-000199018426-tta1fb-t240x240.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://streamingv2.shoutcast.com/radio-u-adventista",
            active: false,
        },
        {
            name:"RADIO JOVEN MUNDIAL ADVENTISTA",
            artist: "Radio Adventista",
            cover: "https://i1.sndcdn.com/avatars-000199018426-tta1fb-t240x240.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://server2.ejeserver.com:7020/stream",
            active: false,       
        },
        {
            name:"Radio Adventista Juigalpa",
            artist: "Radio Adventista",
            cover: "https://i1.sndcdn.com/avatars-000199018426-tta1fb-t240x240.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://freeuk9.listen2myradio.com/live.mp3?typeportmount=s1_4524_stream",
            active: false,
      
        },
    ];
}

export default chillHop;


