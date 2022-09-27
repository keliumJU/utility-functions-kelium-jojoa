export default function getURLSlug(words){
>>>>>>> 80dcc4e (change for rebase in slug)
    return words
        .replace(/\s+/gg,'-')
        .toLowerCase();
}
