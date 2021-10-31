import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'lazyListPipe'
})
export class LazyListPipe implements PipeTransform {
    public transform(value: string, index: number, count: number): string {
        return `${index === count - 1 ? 'and ' : ''}${value}${index < count - 2 ? ',' : ''}`;
    }
}
