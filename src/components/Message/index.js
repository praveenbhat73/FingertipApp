import { View,Text,StyleSheet } from 'react-native'
import React from 'react';

import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const Message=({message})=>{
    const isMessage=()=>{
        return message.user.id==='u1'
    }
    return (
        <>
           <View style={[styles.container,
           {
            backgroundColor: isMessage() ? '#DCF8C5': 'white',
            alignSelf: isMessage() ? 'flex-end' : 'flex-start',
            shadowColor:isMessage()? '#000' : "gray",
           } 
           ]
           }
           >
            <Text style={{fontFamily:'Roboto',fontSize:15}}
            >
                {
                    message.text
                }
            </Text>
            <Text style={styles.time}>
            {dayjs(message.createdAt).fromNow(true)}
            </Text>
           </View>
        </>
    );
}

const styles=StyleSheet.create({
    container:{
        // backgroundColor:'white',
        // alignSelf:'flex-start',
        
        margin:5,
        padding:10,
        borderRadius:12,
    
         maxwidth:'80%',
         //shdows
        //  shadowColor: ''
         shadowOffset: {
           width: 0,
           height: 1,
         },
         shadowOpacity: .18,
         shadowRadius: 2.0,
     
         elevation: 3,
        

    
    },
   
    time:{
        color:'gray',
        alignSelf:'flex-end',
    }
})

export default Message;