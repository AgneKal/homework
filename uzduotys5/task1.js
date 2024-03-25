// Užduotis „Trupmenos“

// 1. Sukurkime klasę Trupmena, ją turėtų sudaryti trys atributai: sveikojiDalis, skaitiklis, daliklis
// 2. Sukurkime klasei setter‘ius ir getter‘ius
// 3. Klasei Trupmena sukurkime metodą toString kuris gražintų trupmeną tokiu formatu: sveikojiDalis skaitiklis / daliklis(pvz.: 1 2 / 5)
// 4. Ištestuokime programinį kodą sukurdami objektą, suteikime kintamiesiems reikšmes ir išveskime rezultatą.
// 5. Sukurkime metodą: pridetiInt(sveikasisSkaicius) kuris pridėtų sveikąjį skaičių prie trupmenos, ištestuokime pakoreguotą kodą.
// 6. Sukurkite dar vieną papildomą metodą: prideti(sveikasisSkaicius, skaitiklis, vardiklis).Nepamirškite jog pridedant skaičių reikia subendravardiklinti).
// 7. Sukurkime metodą pridetiTrupmena(x), šis metodas turės prie esamos trupmenos pridėti paduotą trupmeną.Nepamirškite jog taip pat po šio veiksmo reikės suprastinti trupmeną.
// 8. Sukurkime metodą toDouble() kuris grąžintų esamą trupmenos reikšmę realiuoju skaičiumi(per kablelį).

// Papildomai padarykite:
// 1. Sukurkime metodą prastinti(), jis turėtų suprastinti trupmeną.Metodą padarykime matomą tik pačiam objektui(jis turi būti nepasiekiamas iš išorės).
// 2. Padarykime jog po kiekvieno seterio ir po pridėjimo metodų įvykdymo būtų iškviečiamas prastinimo metodas.

class Trupmena {
    #sveikojiDalis = 0;
    #skaitiklis = 0;
    #daliklis = 0;

    constructor(sveikojiDalis, skaitiklis, daliklis) {
        this.#sveikojiDalis = sveikojiDalis;
        this.#skaitiklis = skaitiklis;
        this.#daliklis = daliklis;
    }

    set sveikojiDalis(sveikojiDalis) {
        this.#sveikojiDalis = sveikojiDalis;
    }

    set skaitiklis(skaitiklis) {
        this.#skaitiklis = skaitiklis;
    }

    set daliklis(daliklis) {
        this.#daliklis = daliklis;
    }

    get sveikojiDalis() {
        return this.#sveikojiDalis
    }

    get skaitiklis() {
        return this.#skaitiklis
    }

    get daliklis() {
        return this.#daliklis
    }

    toString() {
        return `${this.sveikojiDalis === 0 ? '' : this.sveikojiDalis} ${this.skaitiklis} / ${this.daliklis}`;
    }

    pridetiInt(sveikasisSkaicius) {
        return this.sveikojiDalis += sveikasisSkaicius;
    }

    #prastinti() {
        for (let i = this.daliklis; i > 0; i--) {
            if (this.daliklis % i === 0 && this.skaitiklis % i === 0) {
                this.daliklis = this.daliklis / i;
                this.skaitiklis = this.skaitiklis / i;
            }
        }
    }

    prideti(sveikasisSkaicius, skaitiklis, vardiklis) {
        const senosTrupmenosSkaitiklis = this.sveikojiDalis * this.daliklis + this.skaitiklis;
        const paduotosTrupmenosSkaitiklis = sveikasisSkaicius * vardiklis + skaitiklis;
        const bendrasSkaitiklis = senosTrupmenosSkaitiklis * vardiklis + paduotosTrupmenosSkaitiklis * this.daliklis;
        const bendrasVardiklis = this.daliklis * vardiklis;
        if (bendrasSkaitiklis > bendrasVardiklis && bendrasSkaitiklis % bendrasVardiklis !== 0) {
            this.sveikojiDalis = Math.floor(bendrasSkaitiklis / bendrasVardiklis);
            this.daliklis = bendrasVardiklis;
            this.skaitiklis = bendrasSkaitiklis % bendrasVardiklis;
        } else if (bendrasSkaitiklis % bendrasVardiklis === 0) {
            this.sveikojiDalis = this.sveikojiDalis + sveikasisSkaicius + 1;
            this.daliklis = 0;
            this.skaitiklis = 0;
        } else {
            this.sveikojiDalis = 0;
            this.daliklis = bendrasVardiklis;
            this.skaitiklis = bendrasSkaitiklis;
        }
        this.#prastinti();
        return `${this.sveikojiDalis === 0 ? '' : this.sveikojiDalis} ${this.skaitiklis === 0 ? '' : this.skaitiklis} ${this.skaitiklis === 0 && this.daliklis === 0 ? '' : '/'} ${this.daliklis === 0 ? '' : this.daliklis}`;
    }

    pridetiTrupmena(x) {
        const senosTrupmenosSkaitiklis = this.sveikojiDalis * this.daliklis + this.skaitiklis;
        const paduotosTrupmenosSkaitiklis = x.sveikojiDalis * x.daliklis + x.skaitiklis;
        const bendrasSkaitiklis = senosTrupmenosSkaitiklis * x.daliklis + paduotosTrupmenosSkaitiklis * this.daliklis;
        const bendrasVardiklis = this.daliklis * x.daliklis;
        if (bendrasSkaitiklis > bendrasVardiklis && bendrasSkaitiklis % bendrasVardiklis !== 0) {
            this.sveikojiDalis = Math.floor(bendrasSkaitiklis / bendrasVardiklis);
            this.daliklis = bendrasVardiklis;
            this.skaitiklis = bendrasSkaitiklis % bendrasVardiklis;
        } else if (bendrasSkaitiklis % bendrasVardiklis === 0) {
            this.sveikojiDalis = this.sveikojiDalis + x.sveikojiDalis + 1;
            this.daliklis = 0;
            this.skaitiklis = 0;
        } else {
            this.sveikojiDalis = 0;
            this.daliklis = bendrasVardiklis;
            this.skaitiklis = bendrasSkaitiklis;
        }
        this.#prastinti();
        return `${this.sveikojiDalis === 0 ? '' : this.sveikojiDalis} ${this.skaitiklis === 0 ? '' : this.skaitiklis} ${this.skaitiklis === 0 && this.daliklis === 0 ? '' : '/'} ${this.daliklis === 0 ? '' : this.daliklis}`;
    }

    toDouble() {
        return (this.sveikojiDalis * this.daliklis + this.skaitiklis) / this.daliklis;
    }
}


const trupm1 = new Trupmena(1, 5, 6);
const trupm2 = new Trupmena(0, 27, 32);


console.log(trupm1.prideti(0, 27, 32));
