import { unstable_noStore as noStore } from 'next/cache';
import { recordingsObject, fileResponseObject, fileObjectHasMapConstruction } from '@/utils/types/index'
import moment from 'moment';

export const fetchRecordings = async (cb: Function) : Promise<Array<fileResponseObject>> => {
    
    noStore()
    const supabase = cb()
    
    const { data, error } = await supabase
    .storage
    .from('leaping-audio-tech-interview')
    .list()

    return data
}

export const getFileUrls = async (bucket: string, path: string, cb: Function) : Promise<string> => {

    noStore()
    const supabase = cb()
    const { data, error } = await supabase
    .storage
    .from(bucket)
    .getPublicUrl(path)
    
    const { publicUrl } = data
    return publicUrl
}

export const getRecordingsNormalized = async (cb: Function) : Promise<Array<recordingsObject>> => {
    const recordings: Array<fileResponseObject> = await fetchRecordings(cb)
    const fileUrls = await Promise.all(
        recordings.map(async (recording: fileResponseObject): Promise<fileResponseObject> =>{
            const url = await getFileUrls('leaping-audio-tech-interview', recording.name, cb)
            return {...recording, url}
        })
    )
    const filesObj: fileObjectHasMapConstruction = {}
    
    const normalizeCalls = fileUrls.forEach((file: fileResponseObject) => {
        if(file.metadata.mimetype.includes('audio/')){
            const fileIndex: string = file.name.split('.')[0].split("").pop()!
            const toPhone: string = '+61 ' + Math.random().toString().split('.')[1].slice(0,9)
            const fromPhone: string = '+61 ' + Math.random().toString().split('.')[1].slice(0,9)
            const date = moment(file.created_at).format('MMM Do YY, h:mm:ss a');
            const {size} = file.metadata
            if(!filesObj[fileIndex]){
                filesObj[fileIndex!] = {
                    callIndex: fileIndex,
                    recordingName: file.name,
                    createdOn: date,
                    callId: file.id,
                    toPhoneNumber: toPhone,
                    fromPhoneNumber: fromPhone,
                    recordingUrl: file.url,
                    status: 'completed',
                    pathWayLogs: 'view',
                    variables: 'view',
                    cost: 0,
                    callLength: size,
                    summary: 'N/A',
                }
            }else{
                filesObj[fileIndex] = {
                    ...filesObj[fileIndex], 
                    createdOn: date,
                    callId: file.id,
                    toPhoneNumber: toPhone,
                    fromPhoneNumber: fromPhone,
                    recordingUrl: file.url,
                    status: 'completed',
                    pathWayLogs: 'view',
                    variables: 'view'
                }
            }
        }
        if(file.metadata.mimetype.includes('text/')){
            const fileIndex = file.name.split('.')[0].split("").pop()
            if(!filesObj[fileIndex!]){
                filesObj[fileIndex!] = {
                    callIndex: fileIndex,
                    transcript: file.url,
                    cost: 0,
                    callLength: file.metadata.size,
                    summary: 'N/A',
                }
            }else{
                filesObj[fileIndex!] = {
                    ...filesObj[fileIndex!],
                    transcript: file.url 
                }
            }
            
        }
    })
    
    return Object.values(filesObj)
}

export const classifyCalls = (calls: Array<recordingsObject>) => {

    // add more keywords to help the call classifier work better:
    const inboundKeywords = [
    'AI: can I get your first name', 
    'AI: can I get your full name', 
    'AI: can I get your last name', 
    'AI: I get your', 
    'AI: I have your', 
    'AI: Nice to meet you'
    ];
    const outboundKeywords = [
        'AI: I am calling for',
        "AI: I'm calling for",
        "AI: Am I talking to",
        "AI: Am I speaking with"
    ];

    
    calls.forEach(call => {
        const { transcript } = call;

        // Check if the transcript contains any of the inbound keywords
    const isInbound = inboundKeywords.some(keyword => transcript?.includes(keyword));

        // Check if the transcript contains any of the outbound keywords
        const isOutbound = outboundKeywords.some(keyword => transcript?.includes(keyword));

        // Determine the classification based on the validations
        if (isInbound) {
            call.direction = 'Inbound';
        } else if (isOutbound) {
            call.direction = 'Outbound';
        } else {
            call.direction = 'Unknown'; // If no specific pattern matches
        }

    });

    return calls;
}

export const downloadBlobFileByName = async (context: object, name?: string) => {
    const supabase = context
    const {data} = await supabase
    .storage
    .from('leaping-audio-tech-interview')
    .download(name)
    return data
}

export const getCallById = (callsClassified:  Array<recordingsObject>, id: string): recordingsObject => {
    const callDetail = [...callsClassified].find((call: recordingsObject)=> call.callId == id)
    return callDetail
}