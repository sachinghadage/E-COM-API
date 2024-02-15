export default class ProductModel {
    constructor (
        id,
        name,
        desc,
        price,
        imageUrl,
        category,
        sizes
        ){
            this.id=id;
            this.name=name;
            this.desc=desc;
            this.imageUrl=imageUrl;
            this.category=category;
            this.price=price;
            this.sizes=sizes;
        }
        static GetAll(){
            return product;
        }
}

var product = [
    new ProductModel(
        1,
        'product 1',
        'desc for product 1',
        199,
        'https://imgs.search.brave.com/Z9tuLp492_HDP2KSLMJFj142W4XU-IiunfCsWTrqFzA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ybHYu/emNhY2hlLmNvbS9j/cmVhdGVfeW91cl9v/d25fdF9zaGlydC1y/NDU1MTgxM2UzY2Rj/NDlhYWFmYjZhNDQy/NDBlMGJjMTRfYjhw/aWdfMjA4LmpwZw'

    ),
    new ProductModel(
        2,
        'product 1',
        'desc for product 1',
        199,
        'https://imgs.search.brave.com/Z9tuLp492_HDP2KSLMJFj142W4XU-IiunfCsWTrqFzA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ybHYu/emNhY2hlLmNvbS9j/cmVhdGVfeW91cl9v/d25fdF9zaGlydC1y/NDU1MTgxM2UzY2Rj/NDlhYWFmYjZhNDQy/NDBlMGJjMTRfYjhw/aWdfMjA4LmpwZw',
        ['M','XL','S']
    ),
    new ProductModel(
        3,
        'product 1',
        'desc for product 1',
        199,
        'https://imgs.search.brave.com/Z9tuLp492_HDP2KSLMJFj142W4XU-IiunfCsWTrqFzA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ybHYu/emNhY2hlLmNvbS9j/cmVhdGVfeW91cl9v/d25fdF9zaGlydC1y/NDU1MTgxM2UzY2Rj/NDlhYWFmYjZhNDQy/NDBlMGJjMTRfYjhw/aWdfMjA4LmpwZw',
        'Category3',
        ['M','XL','S']
    ),
]
