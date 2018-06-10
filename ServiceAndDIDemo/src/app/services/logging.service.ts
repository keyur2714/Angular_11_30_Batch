export class LoggingService{
    constructor(){}
    logInfo(infoMsq:string):void{
        console.log(infoMsq);
    }
    logDebug(debugMsg:string):void{
        console.log(debugMsg);
    }
}