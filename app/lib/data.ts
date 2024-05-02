import { unstable_noStore as noStore } from 'next/cache';
import { recordingsObject, fileResponseObject } from '@/utils/types/index'
import moment from 'moment';
import { createClient } from "@/utils/supabase/server";

export const fetchRecordings = async (cb: Function) : Promise<fileResponseObject> => {
    
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
        recordings.map(async (recording: fileResponseObject): Promise<recordingsObject[]> =>{
            const url = await getFileUrls('leaping-audio-tech-interview', recording.name, cb)
            return {...recording, url}
        })
    )
    const filesObj: recordingsObject = {}
    
    const normalizeCalls = fileUrls.map((file: fileResponseObject)=>{
        if(file.metadata.mimetype.includes('audio/')){
            const fileIndex: string = file.name.split('.')[0].split("").pop()
            const toPhone: string = '+61 ' + Math.random().toString().split('.')[1].slice(0,9)
            const fromPhone: string = '+61 ' + Math.random().toString().split('.')[1].slice(0,9)
            const date = moment(file.created_at).format('MMM Do YY, h:mm:ss a');
            if(!filesObj[fileIndex]){
                filesObj[fileIndex] = {
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
                    callLength: file.metadata.size,
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
            if(!filesObj[fileIndex]){
                filesObj[fileIndex] = {
                    callIndex: fileIndex,
                    transcript: file.url,
                    cost: 0,
                    callLength: file.metadata.size,
                    summary: 'N/A',
                }
            }else{
                filesObj[fileIndex] = {
                    ...filesObj[fileIndex],
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
        const isInbound = inboundKeywords.some(keyword => transcript.includes(keyword));

        // Check if the transcript contains any of the outbound keywords
        const isOutbound = outboundKeywords.some(keyword => transcript.includes(keyword));

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

export const downloadBlobFileByName = async (name?: string, context: object) => {
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




// function createWavBlob(audioData?: any, sampleRate?: any) {
//     const numChannels = 2; // Assuming stereo
//     const bytesPerSample = 2; // Assuming 16-bit PCM
//     const blockAlign = numChannels * bytesPerSample;
//     const byteRate = sampleRate * blockAlign;
//     const dataSize = audioData.length * bytesPerSample;
   
//     const buffer = new ArrayBuffer(44 + dataSize);
//     const view = new DataView(buffer);
   
//     let offset = 0;
//     function writeString(str: string) {
//        for (let i = 0; i < str.length; i++) {
//          view.setUint8(offset + i, str.charCodeAt(i));
//        }
//        offset += str.length;
//     }
   
//     function writeUint32(d: string) {
//        view.setUint32(offset, d, true);
//        offset += 4;
//     }
   
//     function writeUint16(d: string) {
//        view.setUint16(offset, d, true);
//        offset += 2;
//     }
   
//     writeString('RIFF');
//     writeUint32(36 + dataSize);
//     writeString('WAVE');
//     writeString('fmt ');
//     writeUint32(16);
//     writeUint16(1); // PCM
//     writeUint16(numChannels);
//     writeUint32(sampleRate);
//     writeUint32(byteRate);
//     writeUint16(blockAlign);
//     writeUint16(bytesPerSample * 8); // bits per sample
//     writeString('data');
//     writeUint32(dataSize);
   
//     // Convert Float32Array to Int16Array for 16-bit PCM
//     const int16Array = new Int16Array(audioData.length);
//     for (let i = 0; i < audioData.length; i++) {
//        int16Array[i] = audioData[i] * 0x7FFF;
//     }
   
//     // Append audio data to the buffer
//     const audioDataView = new DataView(int16Array.buffer);
//     for (let i = 0; i < audioDataView.byteLength; i++) {
//        view.setUint8(offset + i, audioDataView.getUint8(i));
//     }
   
//     return new Blob([buffer], { type: 'audio/wav' });
//    }
   
//    // Usage
//    const audioBlob = createWavBlob(audioData, sampleRate);
//    const url = URL.createObjectURL(audioBlob);
//    const link = document.createElement('a');
//    link.href = url;
//    link.download = 'audio.wav';
//    link.click();
