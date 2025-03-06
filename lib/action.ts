'use server';
import { auth } from "@/auth"
import { parseServerActionResponse } from "./utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export const createPitch = async(
    formData:FormData,
    pitch:string)=>
    {
      try{
  const session = await auth();
  if(!session){
    return parseServerActionResponse({status:'ERROR',error:'Not authenticated'});
  }
  const {title,description,category,link} = Object.fromEntries(Array.from(formData).filter(([key])=>key!=="pitch"));
  const slug = slugify(title as string, {lower:true, strict:true});
  const pitchData = {
    title,
    description,
    category,
    image: link,
    slug:{
        _type:'slug',
        current:slug
    },
    author:{
        _type:'reference',
        _ref:session?.id
    },
    pitch,
};
  const result = await writeClient.create({_type:'startup',...pitchData});
  return parseServerActionResponse({...result, error:'',success:'SUCCESS'});
}
catch(error){
    return parseServerActionResponse({status:'ERROR',error:JSON.stringify(error)});
}
}