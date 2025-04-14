const phones = [
    {name: 'samsung', price: 30000, color: 'black', camera: 12, storage: 64},
    {name: 'iphone', price: 80000, color: 'white', camera: 24, storage: 128},    
    {name: 'huawei', price: 40000, color: 'black', camera: 122, storage: 64},
    {name: 'samsung', price: 30000, color: 'black', camera: 182, storage: 64},
    {name: 'iphone', price: 80000, color: 'white', camera: 112, storage: 128},    
    {name: 'huawei', price: 40000, color: 'black', camera: 512, storage: 64},
]
function getCheapestPhone(phones){
    // console.log(phones);
    let min = phones[0];
    for(let phone of phones){
        // console.log(phone);
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapestPhone(phones);
console.log("cheap", cheap);
