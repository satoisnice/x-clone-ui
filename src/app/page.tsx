"use client";

// import Image from "next/image"
import { Image } from '@imagekit/next';

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Homepage = () => {
  return (
    <div className=''>
      <Image urlEndpoint={urlEndpoint} src="general/post.jpeg" alt="testpost" width={600} height={600}/>
      
    </div>
  )
}

export default Homepage