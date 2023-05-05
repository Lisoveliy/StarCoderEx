class ResponseModel{
    // eslint-disable-next-line @typescript-eslint/naming-convention
    generated_text: string = "";
    responseModel(text: string){
        this.generated_text = text;
    }
}