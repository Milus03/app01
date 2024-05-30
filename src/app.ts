// File: index.html
// Author: Reiter Milán
// Copyright: 2024, Reiter Milán
// Group: Szoft I/N/1
// Date: 2024-05-30
// Github: https://github.com/Milus03/
// Licenc: GNU GPL

class Ell {

    aaxis?: HTMLInputElement | null;
    baxis?: HTMLInputElement | null;
    caxis?: HTMLInputElement | null;

    volume?: HTMLInputElement | null;

    calcButton?: HTMLButtonElement | null;

    constructor() {
        this.bindHtml();
        this.handleEvent();
    }

    bindHtml() {
        this.aaxis = document.querySelector("#aaxis");
        this.baxis = document.querySelector("#baxis");
        this.caxis = document.querySelector("#caxis");
        this.volume = document.querySelector("#volume");
        this.calcButton = document.querySelector("#calcButton");
    }

    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        });
    }

    startCalc() {
        const aaxis = Number(this.aaxis?.value);
        const baxis = Number(this.baxis?.value);
        const caxis = Number(this.caxis?.value);
        const volume = this.calcVolume(aaxis, baxis, caxis);

        this.rederResult(volume);
    }
    calcVolume(aaxis: number, baxis: number, caxis: number): number {
        return 4/3 * Math.PI * aaxis * baxis * caxis
    }

    rederResult(volume: number) {
        if(this.volume) {
            this.volume.value = String(volume);
        }     
    }
}

new Ell();