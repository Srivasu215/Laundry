let StartFunc = async ({ inDataToShow }) => {
    let jVarLocalDataToShow = inDataToShow;
    
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);
    jVarLocaltableHeadRow.appendChild(jFLocalSerialNumberColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalpkColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalVoucherNumberColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalBranchName());
    jVarLocaltableHeadRow.appendChild(jFLocalFactory());
    jVarLocaltableHeadRow.appendChild(jFLocalDateColumn());
    // jVarLocaltableHeadRow.appendChild(jFLocalDescriptionColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalQrCodeDetailsCountColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalItemsColumn());

    var $table = $('#table');
    $table.bootstrapTable({
        data: jVarLocalDataToShow,
    });
    
};



let jFLocalSerialNumberColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "#";
    jVarLocalNewTh.setAttribute("data-formatter", "jFGlobalSerialColumn")
    return jVarLocalNewTh;
};

let jFLocalpkColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "pk";
    jVarLocalNewTh.dataset.field = "pk";
    return jVarLocalNewTh;
};

let jFLocalVoucherNumberColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Dc #";
    jVarLocalNewTh.dataset.field = "pk";
    jVarLocalNewTh.setAttribute("data-filter-control", "input")
    return jVarLocalNewTh;
};
let jFLocalBranchName = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "BranchName";
    jVarLocalNewTh.dataset.field = "BranchName";
    jVarLocalNewTh.setAttribute("data-filter-control", "select")
    return jVarLocalNewTh;
};

let jFLocalFactory = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Factory";
    jVarLocalNewTh.dataset.field = "Factory";
    // jVarLocalNewTh.setAttribute("data-filter-control", "select")
    return jVarLocalNewTh;
};

let jFLocalDateColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Date";
    jVarLocalNewTh.dataset.field = "Date";
    jVarLocalNewTh.setAttribute("data-filter-control", "select")
    return jVarLocalNewTh;
};

let jFLocalDescriptionColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Description";
    jVarLocalNewTh.dataset.field = "Description";
    jVarLocalNewTh.setAttribute("data-filter-control", "input")
    return jVarLocalNewTh;
};

let jFLocalQrCodeDetailsCountColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Sent Items";
    jVarLocalNewTh.dataset.field = "QrCodeDetailsCount";
    // jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocalNewTh.setAttribute("data-footer-formatter", "SentItemFooterFormater")

    return jVarLocalNewTh;
};

let jFLocalItemsColumn = () => {
    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Scaned Items";
    jVarLocalNewTh.dataset.field = "ItemDetails";

    // jVarLocalNewTh.setAttribute("data-formatter", "ItemsFormatter")
    jVarLocalNewTh.setAttribute("data-footer-formatter", "priceFormatter")

    return jVarLocalNewTh;
};

let jFLocalScanColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Scan";
    jVarLocalNewTh.dataset.field = "operate"
    jVarLocalNewTh.setAttribute("data-formatter", "operateFormatter")

    return jVarLocalNewTh;
};
// let jFLocalpriceFormatter = () => {

//     let jVarLocalNewTh = document.createElement("th");
//     jVarLocalNewTh.innerHTML = "Scan";
//     jVarLocalNewTh.dataset.field = "operate"
//     jVarLocalNewTh.setAttribute("data-footer-formatter", "priceFormatter")

//     return jVarLocalNewTh;
// };
{/* <th data-formatter="jFLocalSettlementDetails" data-footer-formatter="priceFormatter">Settlement</th> */}

function operateFormatter(value, row, index) {
    return [
        `<a class="like" href="../../Scan/VerticalFromConfigJson/VerticalFromConfigJson.html?VoucherRef=1" title="Like">`,
        '<i class="fa fa-heart">Save</i>',
        '</a>  ',
        '<a class="remove" href="javascript:void(0)" title="Remove">',
        '<i class="fa fa-trash"></i>',
        '</a>'
    ].join('')
};

export { StartFunc }