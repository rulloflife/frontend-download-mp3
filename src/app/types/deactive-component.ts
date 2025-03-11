import { Component, HostListener } from "@angular/core";

@Component({
    template: ''
})

export abstract class DeactiveComponent {
    @HostListener('window:beforeunload', ['$event'])
    public onBeforeUnload(event: BeforeUnloadEvent): void {
        if (!this.isSaved()) {
            event.preventDefault();
        }
    }
    abstract isSaved(): boolean;

    canDeactivate(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (!this.isSaved()) {
                const result = window.confirm('There are unsaved changes! Are you sure?');
                resolve(result)
            } else {
                resolve(true)
            }
        })
    };
}