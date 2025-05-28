import axios from 'axios'

export const trendingSongList=async ()=>{

    const API_KEY="AIzaSyBWaPrsCjsRBfktjMb3hBbjvp6JrN94weQ"
    let list=[];
    try {
       const res=await axios.get(`https://www.googleapis.com/youtube/v3/videos`,
        {
           params: {
            part: 'snippet,statistics',
            chart: 'mostPopular',
            regionCode: 'IN',
            videoCategoryId: '10',
            maxResults: 47,
            key: API_KEY
          }
        }
    )
        list=res.data.items
    }catch(error)
    {
        console.log(error.message);
        
        console.log("diddint fetch trending songs")
    }
    return list

}

export const artists = [
    {
        id:1,
    name: "Bad Bunny",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4r7-OZ_96FLdtzDg4O3u6e5AVb7Hg5NlfyYKxTQvPV4Od2WopiEI6bqZMFBRWYKHXZM&usqp=CAU"
  },
 
   {
    id:2,
    name: "Darshan Raval",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfP3jZnaY0kKidYh-lNFzfF-5q2KWdEnCK8Q&s"
  },
  {
    id:3,
    name: "Billie Eilish",
    imgurl: "https://back.3blcdn.com/images/sites/default/files/styles/ratio_3_2/public/triplepundit/wide/Support%20and%20Feed%20Billie%20Eilish.jpg?h=9c17b57b&width=640&format=auto"
  },
  
   {
    id:4,
    name: "Armaan Malik",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-HXDqel6q1jhPI87T2w_MlndSZBDfITlZWYwBTOdMeiBnfxuE6Iql3EKs1dBI_Kl5-E&usqp=CAU"
  },
  {
    id:4,
    name: "Doja Cat",
    imgurl: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-24600,resizemode-75,msid-98307223/magazines/panache/rapper-doja-cat-is-also-an-ace-bharatnatyam-dancer.jpg"
  },
  {
    id:5,
    name: "Jubin Nautiyal",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDaJRiNbpQTZXBLq0Q16BFct2L2W62VfpuTrFI0Epi-xb6NdpaEbl0QaUqSxagwzpBhU&usqp=CAU"
  },
   {
    id:6,
    name: "Olivia Rodrigo",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ46kWrtNlHRtL5nQgwBXKGQwsRg4rSJIO2RA&s"
  },
  {
    id:7,
    name: "Neha Kakkar",
    imgurl: "https://media.assettype.com/gulfnews%2Fimport%2F2021%2F10%2F09%2FNeha-Kakkar06-1633763942723_17c63eb6159_large.jpg"
  },
  {
    id:8,
    name: "Anuv Jain",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMOjDGbZ4j7pICSq0_8Ve-gRmi515zKp-1eA&s"
  }
];

