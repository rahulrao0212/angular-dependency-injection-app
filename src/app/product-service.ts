import { Product } from './product'
import { Injectable, Inject } from '@angular/core';
import { LogService } from './log-service';

@Injectable()
export class ProductService {

    // constructor(private loggerService: LogService) {
    //     this.loggerService.log("Product Service Constructed");
    // }

    constructor(@Inject("log-service") private loggerService) {
        this.loggerService.log("Product Service Constructed");
    }

    public getProducts() {

        let products: Product[];

        products = [
            new Product(1, 'Memory Card', 500),
            new Product(1, 'Pen Drive', 750),
            new Product(1, 'Power Bank', 100)
        ]

        this.loggerService.log(products);
        return products;
    }
}