interface HttpResponse {
    statusCode: number;
    body: any;
}

export const OK = async(data: any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data,
    }
}

export const noContent = async(): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null,
    }
}