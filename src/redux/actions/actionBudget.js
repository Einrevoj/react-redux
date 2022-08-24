export const depositMoney = (amount) => {
    return(dispath) => {
        dispath({
            type: "DEPOSIT_MONEY",
            payload: amount
        })
       
    }
}

export const withdrawMoney = (amount) => {
    return(dispath) => {
        dispath({
            type: "WITHDRAW_MONEY",
            payload: amount
        })
       
    }
}