import { StartFunc as StartFuncWriteTofile } from '../../kLowDb/WriteTofile/WithChecking/StartFunc.js';
import { StartFunc as Send } from '../../kLowDb/WriteTofile/Send/EntryFile.js';

let PostFunc = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};

let PostFuncGenUuId = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};

let PostWithCheckAndGenPkFunc = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};
let PostSendMailGenUuIdFunc = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};

let PostSendMailFunc = async ({ inPostBody, inDomainName }) => {
    return await Send({ inDataToInsert: inPostBody, inDomainName });
};

export {
    PostFunc, PostFuncGenUuId, PostWithCheckAndGenPkFunc,
    PostSendMailGenUuIdFunc, PostSendMailFunc
};