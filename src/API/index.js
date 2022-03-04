import axios from 'axios'

const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
  try {
const {data:{data}} =  await axios.get(URL, {  
  params: {
  bl_latitude: sw.lat,
  tr_latitude: ne.lat,
  bl_longitude: sw.lng,
  tr_longitude: ne.lng,

},
headers: {
  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
  'x-rapidapi-key': 'e8b4ef0533mshb396a20edaa1c47p18683cjsn7f4a66b512ea'
} 
})
return data
  } catch(error) {
console.log(error)  
  }
}