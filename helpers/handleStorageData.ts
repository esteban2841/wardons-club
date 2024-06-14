import { unstable_noStore as noStore } from "next/cache"



export const fetchStorageUrl = async (cb: Function, storageBucketName: string, path: string ) : Promise<string> => {
    
    noStore()
    const supabase = cb()
    const { data, error } = await supabase
        .storage
        .from(storageBucketName)
        .getPublicUrl(path)
    
    return data.publicUrl
}