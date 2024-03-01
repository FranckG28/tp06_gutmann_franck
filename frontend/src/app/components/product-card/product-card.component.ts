import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { TuiIslandModule, TuiRatingModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';
import { MoneyComponent } from '../money/money.component';
import { ProductPreviewComponent } from '../product-preview/product-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [
        CommonModule,
        TuiIslandModule,
        MoneyComponent,
        RouterModule,
        ProductPreviewComponent,
        TuiRatingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    templateUrl: './product-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

    @Input()
    product!: Product;

}
