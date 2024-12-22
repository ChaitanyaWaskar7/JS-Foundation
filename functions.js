// function makeTea(tea) {
//   return `Making ${tea}`;
// }

// let greet = makeTea("lemon tea")
// console.log(greet)

// function orderTea(teaType)
// {
//     function confirmOrder()
//     {
//         return 'order confirmed for Chai';
//     }

//     return confirmOrder()
// }

// let finalOrder = orderTea("masala chai")
// console.log(finalOrder)

// // arrow function
// const calculateTotal = (price , quantity) => {
//     return price * quantity;
// }
// let totalCost = calculateTotal(20, 78)
// console.log(totalCost)



// function makeTea (typeofTea){}
// function processTea(teaFuntion) {
//     return teaFuntion('early gray')
// }
// let order = processTea(makeTea)
// console.log("order :", order)

function Createteamaker()
{
    return function (teaType) {
        return `Making ${teaType} `
    }
}

let teaMaker = Createteamaker()
console.log(teaMaker('ollong tea'))