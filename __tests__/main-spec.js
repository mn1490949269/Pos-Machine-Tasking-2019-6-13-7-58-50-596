const {countCodes,//getPrice,
    fetchProduct,
    generateReciptItems,
    countTotalPrice,
    formatPrint,
    posMachine} = require('../main');
 
// it ('should count codes', () => {
//     //given
//     const codes = ['0001', '0003', '0005', '0003'];
//     //when
//     const countedCodes = countCodes(codes);
//     //then 
//     expect(countedCodes[0].count).toBe(1);
//     expect(countedCodes[1].count).toBe(2);
//     expect(countedCodes[2].count).toBe(1);
    
// });
/*
it ('should get price of goods', () => {
    //given
    const barcodes = ['0001', '0003', '0005', '0003'];
    var map = new Map();
    map.set("0001",1);
    map.set("0003",2);
    map.set("0005",1);

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

    //when
    const price = getPrice(barcodes,map,database);
    
    //then
    expect(price).toBe(20);
   
});*/
// it ('should fetch product', () => {
//     //given

//     const code = '0001';
//     //when
//     var map = new Map();
//     map = fetchProduct(code,database);
//     //then 
//     expect(map.name).toBe('Coca Cola');
//     expect(map.price).toBe(3);
    
// });
it ('should', () => {
    const codes = ['0001', '0003', '0005', '0003']; 
    //let res = generateReciptItems(codes);
    //console.log(res); 
    
    // const input = [ { count: 1, price: 3, name: 'Coca Cola' },
    // { count: 2, price: 5, name: 'Pepsi-Cola' }  ]
    //var price = countTotalPrice(input);
    //console.log(price);
    var output = posMachine(codes);
    console.log(output);
});