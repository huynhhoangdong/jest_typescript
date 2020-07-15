class Token{
    token : string
    tokenUser1 : string
    tokenUser2 : string
    tokenWorker1: string
    tokenWorker2: string
    tokenHost1: string

    constructor(){
        this.token = ""
        this.tokenUser1 = ""
        this.tokenUser2 = ""
        this.tokenWorker1 = ""
        this.tokenWorker2 = ""
        this.tokenHost1 = ""
    }

    // get method
    getToken(){
        return this.token
    }

    getTokenUser1() {
        return this.tokenUser1
    }

    getTokenUser2(){
        return this.tokenUser2
    }

    getTokenWorker1(){
        return this.tokenWorker1
    }

    getTokenWorker2(){
        return this.tokenWorker2
    }

    getTokenHost1(){
        return this.tokenHost1
    }

    // set method
    setToken(token: string){
        this.token = token
    }

    settokenUser1(tokenUser1: string){
        this.tokenUser1 = tokenUser1
    }

    settokenUser2(tokenUser2: string){
        this.tokenUser2 = tokenUser2
    }

    settokenWorker1(tokenWorker1: string) {
        this.tokenWorker1 = tokenWorker1
    }

    settokenWorker2(tokenWorker2: string) {
        this.tokenWorker2 = tokenWorker2
    }

    settokenHost1(tokenHost1: string) {
        this.tokenHost1 = tokenHost1
    }
}

export default Token