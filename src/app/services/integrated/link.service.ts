import { Injectable } from '@angular/core';

@Injectable()
export class LinkService {

    constructor() { }
    _keyup(e) {
        let val = e.target.value;
        e.target.value = this._convent(val);
    }
    _convent(text) {
        text = text.toString().toLowerCase().trim();

        const sets = [
            { to: 'a', from: '[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶἀ]' },
            { to: 'c', from: '[ÇĆĈČ]' },
            { to: 'd', from: '[ÐĎĐÞ]' },
            { to: 'e', from: '[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]' },
            { to: 'g', from: '[ĜĞĢǴ]' },
            { to: 'h', from: '[ĤḦ]' },
            { to: 'i', from: '[ÌÍÎÏĨĪĮİỈỊ]' },
            { to: 'j', from: '[Ĵ]' },
            { to: 'ij', from: '[Ĳ]' },
            { to: 'k', from: '[Ķ]' },
            { to: 'l', from: '[ĹĻĽŁ]' },
            { to: 'm', from: '[Ḿ]' },
            { to: 'n', from: '[ÑŃŅŇ]' },
            { to: 'o', from: '[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]' },
            { to: 'oe', from: '[Œ]' },
            { to: 'p', from: '[ṕ]' },
            { to: 'r', from: '[ŔŖŘ]' },
            { to: 's', from: '[ßŚŜŞŠȘ]' },
            { to: 't', from: '[ŢŤ]' },
            { to: 'u', from: '[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]' },
            { to: 'w', from: '[ẂŴẀẄ]' },
            { to: 'x', from: '[ẍ]' },
            { to: 'y', from: '[ÝŶŸỲỴỶỸ]' },
            { to: 'z', from: '[ŹŻŽ]' },
            { to: '-', from: '[·/_,:;\']' }
        ];

        sets.forEach(set => {
            text = text.replace(new RegExp(set.from, 'gi'), set.to)
        });

        return text
            .replace(/\s+/g, '-')    // Replace spaces with -
            .replace(/[^a-zA-Z0-9]/g, '-')  // Remove all non-word chars
            .replace(/--+/g, '-')    // Replace multiple - with single -
            .replace(/^-+/, '')      // Trim - from start of text
            .replace(/-+$/, '')      // Trim - from end of text
    }
}

