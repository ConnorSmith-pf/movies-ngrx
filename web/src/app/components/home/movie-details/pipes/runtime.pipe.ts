import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'runtime'
})
export class RuntimePipe implements PipeTransform {
    public transform(value: number): string {
        const hours: number = Math.floor(value / 60);
        const minutes: number = Math.floor(value % 60);

        return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
    }
}
