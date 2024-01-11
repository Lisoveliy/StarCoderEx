class LocalResponseModel {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    response: string = "";
    responseModel(response: string) {
        this.response = response;
    }
}

class ResponseModel {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    generated_text: string = "";
    responseModel(text: string) {
        this.generated_text = text;
    }
}