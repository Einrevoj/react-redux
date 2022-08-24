export const spendMoney = (day, name, amount) => {
    return(dispath) => {
        dispath({
            type: "SPEND_MONEY",
            payload: {day, name, amount}
        })
       
    }
}