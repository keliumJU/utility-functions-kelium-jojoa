function getURLSlug(words){
    return words
        .replace(/\s+/g,'-')
        .toLowerCase();
}
