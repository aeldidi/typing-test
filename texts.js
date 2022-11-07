// Returns a function that splits a string by whitespace, only retaining
// non-empty elements
function words(text) {
    return () => text.split(/\s/).filter(e => e.length != 0)
}

// Each object has 'text' and 'from'. 'text' is a function which evaluates to a
// list of the words to type.
export default [
    {
        from: 'The Wonderful Wizard of Oz by L. Frank Baum',
        text: words(`
        It was a terrible thing to undergo, but during the year I stood there I
        had time to think that the greatest loss I had known was the loss of my
        heart.
        `)
    },
    {
        from: 'The Prince by Niccolò Machiavelli',
        text: words(`
        Upon this a question arises: whether it be better to be loved than
        feared or feared than loved? It may be answered that one should wish to
        be both, but, because it is difficult to unite them in one person, it
        is much safer to be feared than loved, when, of the two, either must be
        dispensed with.
        `)
    },
    {
        from: 'War and Peace by graf Leo Tolstoy',
        text: words(`
        "Pierre was right when he said one must believe in the possibility of
        happiness in order to be happy, and now I do believe in it. Let the
        dead bury their dead, but while one has life one must live and be
        happy!" thought he.
        `)
    },
    {
        from: 'The Strange Case of Dr. Jekyll and Mr. Hyde by Robert Louis Stevenson',
        text: words(`
        There comes an end to all things; the most capacious measure is filled
        at last; and this brief condescension to my evil finally destroyed the
        balance of my soul.
        `)
    },
    {
        from: 'Alice\'s Adventures in Wonderland by Lewis Carroll',
        text: words(`
        "All right," said the Cat; and this time it vanished quite slowly,
        beginning with the end of the tail, and ending with the grin, which
        remained some time after the rest of it had gone.
        `)
    },
    {
        from: 'Dracula by Bram Stoker',
        text: words(`
        How blessed are some people, whose lives have no fears, no dreads; to
        whom sleep is a blessing that comes nightly, and brings nothing but
        sweet dreams.
        `)
    },
    {
        from: 'The Great Gatsby by F. Scott Fitzgerald',
        text: words(`
        "Can't repeat the past?" he cried incredulously. "Why of course you
        can!"

        He looked around him wildly, as if the past were lurking here in the
        shadow of his house, just out of reach of his hand.
        `)
    },
    {
        from: 'Frankenstein; Or, The Modern Prometheus by Mary Wollstonecraft Shelley',
        text: words(`
        This state of mind preyed upon my health, which had perhaps never
        entirely recovered from the first shock it had sustained. I shunned the
        face of man; all sound of joy or complacency was torture to me;
        solitude was my only consolation - deep, dark, deathlike solitude.        
        `)
    },
    {
        from: 'Moby Dick; Or, The Whale by Herman Melville',
        text: words(`
        Human madness is oftentimes a cunning and most feline thing. When you
        think it fled, it may have but become transfigured into some still
        subtler form.
        `)
    }
]