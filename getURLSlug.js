expor default function getURLSlug(words){
    return words
        .replace(/\s+/gg,'-')
        .toLowerCase();
}
