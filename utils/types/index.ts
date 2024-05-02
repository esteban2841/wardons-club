export interface fileResponseObject {
    name: string,
    id: string,
    updated_at: string,
    created_at: string,
    last_accessed_at: string,
    metadata: metadataObject,
}
export interface recordingsObject {
    createdOn: string, //assigned from audio recording
    direction: string,
    toPhoneNumber: string,
    fromPhoneNumber: string,
    recordingUrl: string,
    callLength: metadataObject,
    cost: number,
    status: string,
    pathWayLogs: string,
    transcript: string,
    variables: string,
    callId: string, //assigned from audio recording
    url?: string,
    summary?: string,
    recordingName?: string,
    callIndex?: number,
}

export interface metadataObject {
    eTag: string,
    size: number,
    mimetype: string,
    cacheControl: string,
    lastModified: string,
    contentLength: number,
    httpStatusCode: number    
}
