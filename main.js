const database = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];
function countCodes(codes){
    let goodsMap = new Map();
    for(let i=0;i<codes.length;i++){
        var code = codes[i];
        if (!goodsMap.has(code)) {
            var item = {
                code : code,
                count :1
            }
           goodsMap.set(code,item);
        }else{
            var item = goodsMap.get(code);
            item.count++;
            goodsMap.set(code,item);

        }
    }
    var items = [];
    goodsMap.forEach(function(item){
        items.push(item); 
    })
    return items;
}
function fetchProduct(code){
    for(let i=0;i<database.length;i++){
        if(database[i].id===code){
            return {
                price:database[i].price,
                name:database[i].name
            }
        }
    }
}
function countTotalPrice(arr){
   let sum = 0;
   arr.forEach(function(item){
       let pro = item.price * item.count;
       sum = sum+pro;
   });
   return sum;
}

function generateReciptItems(codes){
    let count = countCodes(codes);
    let item = [];
    let res = [];
    for(let i=0;i<count.length;i++){
         item = fetchProduct(count[i].code);
         res.push({
             count :count[i].count,
             price : item.price,
             name : item.name
         }) 
        return res;
    }
    
}
function formatPrint(arr,price){
    var res='Receipt\n';
    var line= '-----------\n'
    res = res+line;
    arr.forEach(function(item){
         var str=item.name +"\t"+item.price+"\t"+item.name+"\n";
         res=res+str;
    })
    res=res+line+'price:'+price;
}
module.exports = {
    countCodes,
    //fetchProduct,
    generateReciptItems,
    countTotalPrice,
    formatPrint
};